import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { Sidebar } from "../components/ui/sidebar";
import { Breadcrumps } from "../components/ui/Breadcrumps";
import "./ActsSection.css";

export default function ActDetails() {
  const { actId } = useParams();
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await fetch("http://localhost:8000/act/section", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ actId }),
        });
        const data = await response.json();
        if (data.sections) setSections(data.sections);
      } catch (error) {
        console.error("Error fetching sections:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, [actId]);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="sections-page">
      <Navbar />

      <div className="sections-content">
        <Sidebar />
        <main className="sections-main">
          <Breadcrumps />

          <h2 className="sections-title">Act Sections</h2>

          {loading ? (
            <p className="loading-text">Loading sections...</p>
          ) : sections.length === 0 ? (
            <p className="empty-text">No sections found.</p>
          ) : (
            <div className="sections-list">
              {sections.map((section, index) => (
                <div
                  key={section._id}
                  className={`section-card ${
                    openIndex === index ? "open" : ""
                  }`}
                  onClick={() => toggleDropdown(index)}
                >
                  <div className="section-header">
                    <h3>
                      {section.number} {section.title}
                    </h3>
                    <span>{openIndex === index ? "▲" : "▼"}</span>
                  </div>

                  {openIndex === index && (
                    <div className="section-content">{section.content}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
