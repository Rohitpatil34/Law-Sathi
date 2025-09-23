// src/pages/Chatbot.jsx
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Navbar } from "../components/ui/Navbar";
import { Sidebar } from "../components/ui/sidebar";
import "./Chatbot.css";

export default function Chatbot() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]); // {role: 'user'|'assistant', content}
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  // auto-scroll when messages update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    const text = query.trim();
    if (!text) return;

    const userMsg = { role: "user", content: text };
    setMessages((m) => [...m, userMsg]);
    setQuery("");
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post("http://localhost:8000/chat", { query: text });
      const answer = res.data?.answer || "No response from server.";
      setMessages((m) => [...m, { role: "assistant", content: answer }]);
    } catch (err) {
      console.error("Chat error:", err);
      setError("Failed to get reply. Try again.");
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "⚠️ Error: could not reach the chatbot." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === "NumpadEnter") && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbot-page">
      <Navbar />
      <div className="chat-layout">
        <Sidebar />
        <main className="chat-main">
          <h2 className="chat-title">Legal Chatbot</h2>

          <div className="chat-box" ref={scrollRef}>
            {messages.length === 0 && !loading && (
              <div className="chat-placeholder">Ask me anything about laws or Acts.</div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-msg ${msg.role === "user" ? "user" : "assistant"}`}
              >
                {msg.content}
              </div>
            ))}

            {loading && <div className="chat-msg assistant">Typing...</div>}
          </div>

          {error && <div className="chat-error">{error}</div>}

          <div className="chat-input-area">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me about a law, section, or legal concept..."
              className="chat-input"
              rows={2}
            />
            <button onClick={handleSend} className="chat-send-btn" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
