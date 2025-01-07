/* eslint-disable react/prop-types */
import './answer.css'
function Answer({ title, value, score, index, onClick}) {
    const positionLetter = 'abcd';
   
    const handleClick = () => {
        if (onClick) {
            onClick(value, score); 
        }
    };

    return (
        <>
            <button type="button" className="btn btn-answer w-100 py-3" data-bs-toggle="button" value={value} onClick={handleClick}>{`${positionLetter[index]}) ${title}`}</button>
        </>
    )
}
export default Answer;