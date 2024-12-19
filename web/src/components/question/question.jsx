/* eslint-disable react/prop-types */
import { Answer } from "./components";

function Question({ id, question, answers, handleValue}) {



    return ( 
        <div className="mt-5 py-5 ms-4">
            <p>{question}</p>
            <div className="d-flex gap-2 w-50 ps-4">
                {answers.map((answer, index) => 
                <Answer key={id + answer.value} {...answer} index={index} onClick={handleValue}/>)}
            </div>
        </div>
    )
}
export default Question;