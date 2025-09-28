// src/pages/Chatbot.jsx
import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "../components/ui/Navbar";
import "./Chatbot.css";

export default function Chatbot() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSend = async () => {
    const text = query.trim();
    if (!text) return;

    // Add user message with timestamp
    const userMessage = {
      role: "user", 
      content: text,
      timestamp: getCurrentTime()
    };
    
    setMessages((m) => [...m, userMessage]);
    setQuery("");
    setIsTyping(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/chatbot`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text }),
      });

      const data = await res.json();

      const assistantMessage = {
        role: "assistant", 
        content: data.answer || "Sorry, I couldn't find an answer.",
        timestamp: getCurrentTime()
      };
      
      setMessages((m) => [...m, assistantMessage]);
    } catch (error) {
      console.error("❌ Chatbot API error:", error);
      const errorMessage = {
        role: "assistant", 
        content: "⚠️ Failed to connect to chatbot server. Please try again.",
        timestamp: getCurrentTime()
      };
      setMessages((m) => [...m, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickReplies = [
    "What is criminal law?",
    "Explain Indian Contract Act 1872",
    "What is Article 21 of the Constitution?",
    "What is the IT Act 2000?",
    "Define tort law",
    "What are fundamental rights?"
  ];

  const handleQuickReply = (text) => {
    setQuery(text);
    // Auto-focus on input after selecting quick reply
    setTimeout(() => {
      document.querySelector('.chat-input')?.focus();
    }, 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbot-page">
      <Navbar />

      <div className="chatbot-container">
        {/* Intro Screen */}
        {messages.length === 0 && (
          <div className="chatbot-intro">
            <div className="chatbot-icon">⚖️</div>
            <h2 className="chatbot-title">Hello! I'm your Legal Assistant</h2>
            <p className="chatbot-subtitle">
              Ask me about Indian laws, sections, acts, or legal concepts. 
              I'll provide accurate information to help you understand the legal landscape.
            </p>

            <div className="chatbot-suggestions">
              {quickReplies.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(suggestion)}
                  className="suggestion-btn"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat Messages */}
        {messages.length > 0 && (
          <div className="chatbox">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-msg ${msg.role}`}>
                {msg.content}
                <div className="chat-timestamp">{msg.timestamp}</div>
              </div>
            ))}

            {isTyping && (
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <span style={{marginLeft: '10px', fontSize: '0.8rem', color: '#6b7280'}}>
                  AI is thinking...
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input Box */}
        <div className="chat-input-wrapper">
          <input
            type="text"
            className="chat-input"
            placeholder="Ask about Indian laws, acts, or legal concepts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            disabled={isTyping}
          />
          <button
            className="chat-send-btn"
            onClick={handleSend}
            disabled={isTyping || !query.trim()}
            aria-label="Send message"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}