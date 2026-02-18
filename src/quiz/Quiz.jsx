import Question from "./Question.jsx";
import {useState} from "react";
import Navigation from "./Navigation.jsx";
import Results from "./Results.jsx";

import './quiz.css';


const quizData = [
    {
        id: 1,
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Lyon", "Marseille", "Toulouse"],
        correctAnswer: 0
    },
    {
        id: 2,
        question: "Combien font 5 + 7 ?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2
    },
    {
        id: 3,
        question: "Quel est le langage de programmation créé par Facebook ?",
        options: ["Vue", "Angular", "React", "Svelte"],
        correctAnswer: 2
    },
    {
        id: 4,
        question: "En quelle année a été créé JavaScript ?",
        options: ["1995", "2000", "2005", "2010"],
        correctAnswer: 0
    }
];

function Quiz() {
    const [userAnswers, setUserAnswers] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

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
