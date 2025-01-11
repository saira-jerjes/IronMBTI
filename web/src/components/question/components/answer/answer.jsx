/* eslint-disable react/prop-types */
import './answer.css';

function Answer({ title, value, score, index, onClick, image }) {
    const positionLetter = 'abcd';

    const handleClick = () => {
        if (onClick) {
            onClick(value, score); 
        }
    };

    return (
        <>
            {image ? (
                <div
                    className="answer-image-button"
                    onClick={handleClick}
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className="answer-title">{`${positionLetter[index]}) ${title}`}</div>
                </div>
            ) : (
                <button
                    type="button"
                    className="btn btn-answer w-100 py-3"
                    data-bs-toggle="button"
                    value={value}
                    onClick={handleClick}
                >
                    {!image && `${positionLetter[index]}) ${title}`}
                </button>
            )}
        </>
    );
}

export default Answer;
