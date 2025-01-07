import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getQuestions } from "../services/questions-api";
import { Question } from "../components";
import './test-page.css'; 

function TestPage() {
    const MAX_QUESTIONS = 10; 
    const [questions, setQuestions] = useState(null);
    const isLoading = questions === null;
    const [actualQuestionIndex, setActualQuestionIndex] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const navigate = useNavigate();

    const getPersonality = (score) => {
      if (score <= 10) return "Introvert";
      if (score <= 20) return "Extrovert";
      if (score <= 30) return "Analytical";
      if (score <= 40) return "Creative";
    };


    useEffect(() => {
        getQuestions()
            .then(fetchedQuestions => {
                setQuestions(fetchedQuestions.slice(0, MAX_QUESTIONS));
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    const handleValue = (value, score) => {
        setTotalScore(prevScore => prevScore + score);
        setActualQuestionIndex(prevIndex => prevIndex + 1);
    };

    if (isLoading) {
        return <div className="d-flex justify-content-center align-items-center vh-100 ">Loading...</div>;
    }

    if (actualQuestionIndex === questions.length) {
        const personality = getPersonality(totalScore);
     
        navigate('/result', { state: { personality, totalScore } });
        return null; 
      }

    return (
        <div className="test-page-container d-flex justify-content-center align-items-center vh-100">
        <div className="question-card">
            <div className="progress-bar mb-4">
                <div
                    className="progress"
                    style={{ width: `${(actualQuestionIndex / MAX_QUESTIONS) * 100}%` }}
                ></div>
            </div>
            <Question
                {...questions[actualQuestionIndex]}
                handleValue={handleValue}
            />
        </div>
    </div>
    );
}

export default TestPage;
