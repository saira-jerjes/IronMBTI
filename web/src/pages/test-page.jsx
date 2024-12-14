import React from "react";
import { useState, useEffect } from "react";
import { getQuestions } from "../services/questions-api";

function TestPage() {
    const [questions, setQuestions] = useState(null);
    const isLoading = questions === null

    useEffect (() => { 
        getQuestions()
            .then(questions => {
                setQuestions(questions)
            })
            .catch(err => {
                console.error(err)
            })
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {JSON.stringify(questions, null, 2)}
        </div>
    )

}
export default TestPage; 