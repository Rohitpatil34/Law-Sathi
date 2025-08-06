// async function extractAllSectionsWithContent() {
//   const rows = document.querySelectorAll('#myTableActSection tbody tr');
//   const sections = [];

//   for (const row of rows) {
//     const toggleSpan = row.querySelector('span[data-toggle="collapse"]');
//     if (toggleSpan) {
//       const collapseId = toggleSpan.getAttribute('href')?.replace('#', '');
//       const panel = document.getElementById(collapseId);

//       // Expand panel if not already expanded
//       if (panel && panel.classList.contains('collapse')) {
//         toggleSpan.click(); // simulate user click to expand
//         await new Promise(resolve => setTimeout(resolve, 200)); // wait for animation
//       }

//       // Now extract section info
//       const anchor = row.querySelector('a.title');
//       const sectionLabel = anchor?.querySelector('span.label')?.innerText.trim();
//       const sectionTitle = anchor?.innerText.replace(sectionLabel, '').trim();

//       const paraElems = panel?.querySelectorAll('.panel-body p');
//       let fullText = '';
//       paraElems?.forEach(p => {
//         fullText += p.innerText.trim() + '\n';
//       });

//       sections.push({
//         section: sectionLabel || '',
//         title: sectionTitle || '',
//         content: fullText.trim()
//       });
//     }
//   }

//   console.log(sections);
//   return sections;
// }

// extractAllSectionsWithContent();


async function extractAndSendSections(actName) {
  const rows = document.querySelectorAll('#myTableActSection tbody tr');
  const sections = [];

  for (const row of rows) {
    const toggleSpan = row.querySelector('span[data-toggle="collapse"]');
    if (toggleSpan) {
      const collapseId = toggleSpan.getAttribute('href')?.replace('#', '');
      const panel = document.getElementById(collapseId);

      if (panel && panel.classList.contains('collapse')) {
        toggleSpan.click();
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      const anchor = row.querySelector('a.title');
      const sectionLabel = anchor?.querySelector('span.label')?.innerText.trim();
      const sectionTitle = anchor?.innerText.replace(sectionLabel, '').trim();

      const paraElems = panel?.querySelectorAll('.panel-body p');
      let fullText = '';
      paraElems?.forEach(p => {
        fullText += p.innerText.trim() + '\n';
      });

      sections.push({
        number: sectionLabel || '',
        title: sectionTitle || '',
        content: fullText.trim()
      });
    }
  }

  console.log("📦 Total Sections Extracted:", sections.length);

  // Chunked POST
  const chunkSize = 50;
  for (let i = 0; i < sections.length; i += chunkSize) {
    const chunk = sections.slice(i, i + chunkSize);
    try {
      const res = await fetch("http://localhost:8000/acts/section", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          actName: actName,
          sections: chunk
        })
      });

      if (!res.ok) throw new Error(`❌ Failed to send chunk ${i / chunkSize + 1}`);

      const result = await res.json();
      console.log(`✅ Chunk ${i / chunkSize + 1} sent successfully:`, result);
    } catch (err) {
      console.error(`❌ Error sending chunk ${i / chunkSize + 1}:`, err);
    }
  }

  return sections;
}

// Usage
extractAndSendSections("Governors (Emoluments, Allowances and Privileges) Act 1982");