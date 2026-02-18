function Answer({answerText, index, questionId, onAnswer, selectedAnswer}) {
    return (
        <label
            htmlFor={`q${questionId}-a${index}`}
            data-selected={selectedAnswer === index}
        >
            <input
                type="radio"
                value={index}
                id={`q${questionId}-a${index}`}
                name={`question${questionId}`}
                onChange={() => onAnswer(questionId, index)}
                checked={selectedAnswer === index}
            />
            <span>{answerText}</span>
        </label>
    );


}

export default Answer;
