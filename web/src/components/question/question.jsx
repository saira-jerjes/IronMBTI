/* eslint-disable react/prop-types */
import { Answer } from "./components";

function Question({ id, question, answers, handleValue }) {
  return (
    <div>
       <h4 className="question-text">{question}</h4>
       <hr className="separator-line"/>
      <div className="d-flex flex-column gap-3">
        {answers.map((answer, index) => (
          <Answer
            key={id + answer.value}
            {...answer}
            index={index}
            onClick={handleValue}
          />
        ))}
      </div>
    </div>
  );
}
export default Question;
