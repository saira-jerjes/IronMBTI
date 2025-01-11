import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestions } from "../services/questions-api";
import { PageLayout, Question } from "../components";
import stickerbckg from "../assets/imgs/Sticker-quiz.webp";
import "./test-page.css";

function TestPage() {
  const MAX_QUESTIONS = 10;
  const [questions, setQuestions] = useState(null);
  const isLoading = questions === null;
  const [actualQuestionIndex, setActualQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const navigate = useNavigate();

  const getPersonality = (score) => {
    if (score <= 10) return "Pool";
    if (score <= 20) return "Cristian";
    if (score <= 30) return "Julio";
    if (score <= 40) return "Carlos";
  };

  useEffect(() => {
    getQuestions()
      .then((fetchedQuestions) => {
        setQuestions(fetchedQuestions.slice(0, MAX_QUESTIONS));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleValue = (value, score) => {
    setTotalScore((prevScore) => prevScore + score);
    setActualQuestionIndex((prevIndex) => prevIndex + 1);
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 ">
        Loading...
      </div>
    );
  }

  if (actualQuestionIndex === questions.length) {
    const personality = getPersonality(totalScore);

    navigate("/result", { state: { personality, totalScore } });
    return null;
  }

  return (
<PageLayout>
    <div
      style={{
        position: 'absolute',
        width: '100%',
        backgroundPosition: '0px bottom',
        backgroundImage: `url(${stickerbckg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: '100vh', 
        
      }}
    >

    <div className="test-page-container d-flex justify-content-center align-items-center vh-100">
      <Question
        {...questions[actualQuestionIndex]}
        handleValue={handleValue}
      />
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(actualQuestionIndex / MAX_QUESTIONS) * 100}%` }}
        ></div>
      </div>
    </div>
    </div>
</PageLayout>

  );
}

export default TestPage;
