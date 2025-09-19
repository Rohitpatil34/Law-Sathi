import { useState } from "react";
import axios from "axios";
import './MCQtest.css';
import { Navbar } from "@/components/ui/Navbar";

export default function MCQTest() {
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
      const res = await axios.post("http://localhost:8000/test", {
        law: law,
      });
      console.log("Fetched questions:", res.data);
      setQuestions(res.data.questions || []);
    } catch (err) {
      console.error("Error fetching questions:", err);
      alert("Failed to fetch questions. Try again!");
    }
    setLoading(false);
  };

  const handleOptionChange = (qId, optionIndex) => {
    setAnswers({ ...answers, [qId]: optionIndex });
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        correctCount++;
      }
    });
    const percentage = (correctCount / questions.length) * 100;
    setScore(percentage);
    return percentage;
  };

  const handleSubmit = () => {
    const finalScore = calculateScore();
    setSubmitted(true);
    setScore(finalScore);
  };

  const handleReattempt = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="mcq-container">
      <Navbar />
      <h1 className="mcq-title">Law MCQ Test</h1>

      {/* Input & Button */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter law (e.g. Indian Contract Act 1872)"
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

          {/* Reattempt Button */}
          <button
            onClick={handleReattempt}
            className="reattempt-btn mt-4 bg-yellow-500 text-white px-6 py-2 rounded"
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
              <p className="question-text">
                {q.id}. {q.question}
              </p>
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

              {/* Show explanation after submission */}
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
  );
}
