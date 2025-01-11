/* eslint-disable react/prop-types */
import { Answer } from "./components";

function Question({ id, question, answers, handleValue }) {
  const isMemeQuestion = id === "9"; 
  return (
    <div>
    <h4 className="question-text">{question}</h4>
    <div
      className={`d-flex ${isMemeQuestion ? 'answer-grid' : 'flex-column'} gap-3`}
    >
      {answers.map((answer, index) => (
        <Answer
          key={id + answer.value}
          {...answer}
          index={index}
          onClick={handleValue}
          image={answer.image} 
          isMemeQuestion={isMemeQuestion}
        />
      ))}
    </div>
  </div>
  );
}
export default Question;


