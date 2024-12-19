import { useState, useEffect } from "react";
import { getQuestions } from "../services/questions-api";
import { PageLayout, Question } from "../components";

function TestPage() {
    const [questions, setQuestions] = useState(null);
    const isLoading = questions === null;
    const [actualQuestionIndex, setActualQuestionIndex] = useState(0);
    const [totalScore, setTotalScore] = useState(0);


    const getPersonality = (score) => {
        if (score <= 10) return "Introvert";
        if (score <= 20) return "Extrovert";
        if (score <= 30) return "Analytical";
        if (score <= 40) return "Creative";
        // return "You're nothing.... " añadir gif
    };


    useEffect(() => { 
        getQuestions()
            .then(questions => {
                setQuestions(questions);
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
        return <div>Loading...</div>;
    }

    if (actualQuestionIndex === questions.length) {
        const personality = getPersonality(totalScore);

        return (
            <div>
                <h2>Test Completed!</h2>
                <h3>Your Personality: {personality}</h3>
                <p>Your total score: {totalScore}</p>
            </div>
        );
    }

    return (
        <PageLayout className="mt-5">
            <Question
                {...questions[actualQuestionIndex]}
                handleValue={handleValue}
            />
        </PageLayout>
    );

 
}

export default TestPage;
