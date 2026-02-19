import Question from "./Question.jsx";
import Navigation from "./Navigation.jsx";
import Results from "./Results.jsx";

import './quiz.css';
import useQuizStore from "../stores/useQuizStore.js";
import {useEffect} from "react";



function Quiz() {

    const {
        quizData, loading, error,
        userAnswers, currentQuestionIndex, isFinished,
        fetchQuiz, setAnswer, next, previous, restart
    } = useQuizStore();

    useEffect(() => {
        fetchQuiz();
    }, [fetchQuiz]);

    if(loading) return <main aria-busy="busy">Chargement des données...</main>;
    if(error) return <main aria-errormessage={error}>Error!</main>;
    if(!quizData || (quizData && quizData.length === 0)) return <main>Aucune question disponible</main>;

    const currentQuestion = quizData[currentQuestionIndex];
    const isFirstQuestion = currentQuestionIndex === 0;
    const isLastQuestion = currentQuestionIndex === quizData.length - 1;
    const hasAnswer = currentQuestion.id in userAnswers;


    const results = isFinished && (
        <Results  onRestart={restart} />
    );

    const questions = !isFinished && (
        <div>

            <ProgressBar current={currentQuestionIndex} total={quizData.length} />

            <Question data={currentQuestion}
                      onAnswer={setAnswer}
                      selectedAnswer={userAnswers[currentQuestion.id]}/>


            <Navigation onNext={next()}
                        onPrev={previous()}
                        hasAnswer={hasAnswer}
                        isLast={isLastQuestion}
                        isFirst={isFirstQuestion}/>
        </div>
    )

    return (
        <main className="container">

            <header>
                <h2>Quiz</h2>
                {!isFinished && <p>Testez vos connaissances</p>}
            </header>

            <article>
                {results}
                {questions}
            < /article>
        </main>
    )
}

function ProgressBar({current, total}) {
    return (
        <div id="progress">
            <div>
                <span>Question {current + 1} sur {total}</span>
                <span>{Math.round(((current + 1) / total) * 100)}%</span>
            </div>
            <progress value={current + 1} max={total}/>
        </div>
    )
        ;
}


export default Quiz;
