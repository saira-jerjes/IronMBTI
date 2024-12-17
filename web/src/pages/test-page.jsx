import React from "react";
import { useState, useEffect } from "react";
import { getQuestions } from "../services/questions-api";
import { PageLayout, Question } from "../components";

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
        <PageLayout className="mt-5 ">
            {<Question {...questions[0]}/>}
            {/* crear handle */}
        </PageLayout>
    )

}
export default TestPage; 