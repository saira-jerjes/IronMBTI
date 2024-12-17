/* eslint-disable react/prop-types */
import './answer.css'
function Answer({ title, value, index }) {
    const positionLetter = 'abcd';
    return (
        <>
            <button type="button" className="btn btn-primary w-100 answer-btn" data-bs-toggle="button" value={value}>{`${positionLetter[index]}) ${title}`}</button>
        </>
    )
}
export default Answer;