import { useState } from "react";
import axios from "axios";
import { Navbar } from "../components/ui/Navbar";
import { useNavigate } from "react-router-dom";
import './MCQtest.css';

export default function MCQTest() {
  const navigate = useNavigate();
  const [law, setLaw] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);

  const fetchQuestions = async () => {
    if (!law.trim()) return alert("Please enter a law topic");
    setLoading(true);
    setSubmitted(false);
    setAnswers({});
    setScore(0);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/test`, { law });
      setQuestions(res.data.questions || []);
    } catch (err) {
      console.error("Error fetching questions:", err);
      alert("Failed to fetch questions. Try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleOptionChange = (qId, optionIndex) => {
    setAnswers({ ...answers, [qId]: optionIndex });
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) correctCount++;
    });
    const percentage = (correctCount / questions.length) * 100;
    setScore(percentage);
    return percentage;
  };

  const handleSubmit = () => {
    calculateScore();
    setSubmitted(true);
  };

  const handleReattempt = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="mcq-page">
      <Navbar />

      {/* Back Button */}
      <div className="back-btn-wrapper" style={{ padding: "1rem 2rem" }}>
        <button
          onClick={() => navigate(-1)}
          className="generate-btn"
          style={{ background: "#64748b" }}
        >
          ← Back
        </button>
      </div>

      <div className="mcq-container">
        <h1 className="mcq-title">Law MCQ Test</h1>

        {/* Input & Generate Button */}
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter law (e.g., Indian Contract Act 1872)"
            value={law}
            onChange={(e) => setLaw(e.target.value)}
            className="law-input"
          />
          <button
            onClick={fetchQuestions}
            className="generate-btn"
            disabled={loading}
          >
            {loading ? "Loading..." : "Generate Test"}
          </button>
        </div>

        {/* Score Display */}
        {submitted && (
          <div className="score-container">
            <h2 className="score-title">Test Results</h2>
            <div className="score-circle">
              <div className="score-text">
                <span className="score-percent">{score.toFixed(1)}%</span>
                <span className="score-label">Correct</span>
              </div>
            </div>
            <p className="score-detail">
              You answered {Math.round((score / 100) * questions.length)} out of{" "}
              {questions.length} questions correctly
            </p>

            <button
              onClick={handleReattempt}
              className="reattempt-btn"
            >
              Reattempt Test
            </button>
          </div>
        )}

        {/* Questions */}
        {questions.length > 0 && (
          <form
            className="questions-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {questions.map((q) => (
              <div key={q.id} className="question-card">
                <p className="question-text">{q.id}. {q.question}</p>
                <div className="options-container">
                  {q.options.map((opt, idx) => (
                    <label
                      key={idx}
                      className={`option-label ${
                        submitted
                          ? idx === q.answer
                            ? "correct"
                            : answers[q.id] === idx
                            ? "incorrect"
                            : ""
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        value={idx}
                        checked={answers[q.id] === idx}
                        onChange={() => handleOptionChange(q.id, idx)}
                        disabled={submitted}
                        className="option-input"
                      />
                      {opt}
                    </label>
                  ))}
                </div>

                {submitted && (
                  <p className="explanation-text">
                    <span className="explanation-label">Explanation: </span>
                    {q.explanation}
                  </p>
                )}
              </div>
            ))}

            {!submitted && questions.length > 0 && (
              <button type="submit" className="submit-btn">
                Submit Test
              </button>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
