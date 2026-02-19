import Question from "./Question.jsx";
import {useCallback, useState} from "react";
import Navigation from "./Navigation.jsx";
import Results from "./Results.jsx";

import './quiz.css';
import {quizApi} from "../services/api.js";
import useGenericApi from "../hooks/useGenericApi.js";



function Quiz() {

    const quizCallback = useCallback(()=> quizApi.getAll(), []);
    const [quizData, loading, error]= useGenericApi(quizCallback);

    const [userAnswers, setUserAnswers] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    if(loading) return <main aria-busy="busy">Chargement des données...</main>;
    if(error) return <main aria-errormessage={error}>Error!</main>;
    if(!quizData && quizData.length === 0) return <main>Aucune question disponible</main>;

    const currentQuestion = quizData[currentQuestionIndex];
    const isFirstQuestion = currentQuestionIndex === 0;
    const isLastQuestion = currentQuestionIndex === quizData.length - 1;
    const hasAnswer = currentQuestion.id in userAnswers;


    const handleQuestionAnswer = (questionId, selectedOption) => {
        setUserAnswers((prevState) => ({
            ...prevState, [questionId]: selectedOption
        }))
    }

    const handleNext = () => {
        if (isLastQuestion) {
            setIsFinished(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }

    const handlePrevious = () => {
        if (!isFirstQuestion) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    }

    const handleRestart = () => {
        setUserAnswers({});
        setCurrentQuestionIndex(0);
        setIsFinished(false);
    }

    const results = isFinished && (
        <Results userAnswers={userAnswers} onRestart={handleRestart} quizData={quizData} />
    );

    const questions = !isFinished && (
        <div>

            <ProgressBar current={currentQuestionIndex} total={quizData.length} />

            <Question data={currentQuestion}
                      onAnswer={handleQuestionAnswer}
                      selectedAnswer={userAnswers[currentQuestion.id]}/>


            <Navigation onNext={handleNext}
                        onPrev={handlePrevious}
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
