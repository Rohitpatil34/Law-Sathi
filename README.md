# 📚 LawSathi – Simplifying Legal Learning

**LawSathi** is a web-based educational platform built as part of the IITB EdTech Internship (Track 2 – Fullstack). The platform aims to simplify complex Indian legal content by offering categorized, act-wise, and section-wise information along with AI assistance, mock tests, and multilingual support.

---
## Live Demo
https://law-sathi-ac41.vercel.app/

---

## 🚨 Problem Statement

Legal education in India is hindered by the complexity of acts, clauses, and legal language, making it difficult for students and the general public to comprehend. Most platforms lack categorization, contextual examples, and practice-based learning tools.

### Why It Matters

- Legal texts are hard to interpret without legal training.  
- There’s no unified, student-friendly legal learning platform.  
- Simplification is essential for both legal literacy and academic success.

---

## 💡 Our Solution

LawSathi simplifies Indian laws by providing:

- 📂 **Categorized Content** – Act-wise and domain-wise legal browsing (e.g., Family Law, Criminal Law)
- 📝 **Plain English Summaries** – Simplified legal texts for better comprehension


---

## 🏗️ Tech Stack

| Layer      | Tools Used                     |
|------------|--------------------------------|
| Frontend   | React.js, Tailwind CSS         |
| Backend    | Express.js and node.js         |
| Database   | MongoDB (NoSQL)                |
| DevOps     | Git, GitHub                    |

---

## 🔍 Features Overview

- 🔍 Full-text search of laws and sections  
- 🗂️ Domain-wise categorization (e.g., Criminal, Civil, Family Law)  
- 🤖 Smart chatbot using LLM for legal Q&A   
- 🧪 Interactive quizzes with auto-scoring   
- 🧭 Easy navigation with breadcrumbs and sidebar  
- 📑 Source: Scraped and cleaned from [India Code](https://www.indiacode.nic.in/)

---

## 📈 System Architecture

1. **User Interface (React.js)** – Clean and responsive layout with law categories and test modules  
2. **Backend API (Flask)** – Serves legal content, quiz data, and chatbot integration  
3. **Database (MongoDB)** – Stores structured legal data, mock test records, and user profiles  
  

---
Here’s a **step-by-step guide** for running **LawSathi** locally:

---

## ⚙️ Setup & Run Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Rohitpatil34/Law-Sathi.git
cd LawSathi
```

---

### 2️⃣ Install dependencies (root)

At the root folder (where `package.json` exists):

```bash
npm install
```

---

### 3️⃣ Run the **frontend**

```bash
cd law   # go inside frontend folder
npm install   # (first time only, to install frontend deps)
npm run dev   # starts frontend 
```

---

### 4️⃣ Run the **backend**

Open a **new terminal** (keep frontend running):

```bash
cd backend
npm install   # (first time only, to install backend deps)
npm run dev   # starts backend 
```

---





> Making legal learning easier, one section at a time.
