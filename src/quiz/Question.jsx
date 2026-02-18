import Answer from "./Answer.jsx";

function Question({data, onAnswer, selectedAnswer}) {
    return (
        <div id="question">
            <h2>{data.question}</h2>

            <div id="answers">
                {data.options.map((item, index) => (
                    <Answer key={index}
                            answerText={item}
                            index={index}
                            questionId={data.id}
                            onAnswer={onAnswer}
                            selectedAnswer={selectedAnswer}/>
                ))}
            </div>
            <hr/>
        </div>
    )
}

export default Question;
