import useQuizStore from "../stores/useQuizStore.js";

function Results({ userAnswers, onRestart, quizData }) {
    const {getScore} = useQuizStore((s)=> s.getScore);

    const score = getScore();
    const percentage = Math.round((score / quizData.length) * 100);
    const stars = "★".repeat(Math.ceil(percentage / 20));

    return (
        <div id="results">
            <div style={{fontSize: '24px', color: 'yellow'}}>{stars}</div>
            <h2>Résultats</h2>
            <p>
                Vous avez obtenu <strong>{score}/{quizData.length}</strong> bonnes réponses
            </p>

            <div id="corrections">
                {quizData.map((q) => {
                    const isCorrect = userAnswers[q.id] === q.correctAnswer;
                    return (
                        <article key={q.id} data-correct={isCorrect}>
                            <p>{q.question}</p>
                            <small>
                                Votre réponse :{" "}
                                <span data-status={isCorrect ? "correct" : "wrong"}>
                  {q.options[userAnswers[q.id]]}
                </span>
                                {!isCorrect && (
                                    <>
                                        {" — "}Bonne réponse :{" "}
                                        <span data-status="expected">{q.options[q.correctAnswer]}</span>
                                    </>
                                )}
                            </small>
                        </article>
                    );
                })}
            </div>

            <button onClick={onRestart}>Recommencer</button>
        </div>
    );
}

export default Results;
