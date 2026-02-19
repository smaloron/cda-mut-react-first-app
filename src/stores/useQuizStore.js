import {create} from "zustand";
import {quizApi} from "../services/api.js";

const useQuizStore = create((set, get) => ({
    quizData: [],
    loading: false,
    error: null,

    // State du quiz
    userAnswers: {},
    currentQuestionIndex: 0,
    isFinished: false,

    fetchQuiz: async () => {
        set({loading: true, error: null});
        try {
            const data = await quizApi.getAll();
            set({loading: false, quizData: data});
        } catch (err) {
            set({loading: false, error: err});
        }
    },

    getCurrentQuestion: ()=> {
        const { quizData, currentQuestionIndex } = get();
        return quizData[currentQuestionIndex];
    },
    isFirstQuestion: ()=> {
        const {currentQuestionIndex} = get();
        return currentQuestionIndex === 0;
    },

    isLastQuestion: () => {
        const {currentQuestionIndex, quizData} = get();
        return currentQuestionIndex === quizData.length - 1;
    },
    hasAnswer: ()=> {
        const {userAnswers, getCurrentQuestion} = get();
        const currentQuestion = getCurrentQuestion();
        return currentQuestion.id in userAnswers;
    },

    setAnswer: (questionId, selectedOption) => {
        set((prev) => (
                {
                    userAnswers: {...prev.userAnswers, [questionId]: selectedOption},
                }
            )
        );
    },

    next: () => {
        const {currentQuestionIndex, quizData} = get();
        if (currentQuestionIndex === quizData.length - 1) {
            set({isFinished: true});
        } else {
            set({currentQuestionIndex: currentQuestionIndex + 1});
        }
    },

    previous: () => {
        const {currentQuestionIndex} = get();
        if(currentQuestionIndex > 0){
            set({currentQuestionIndex: currentQuestionIndex - 1});
        }
    },

    restart: () => {
        set({
            isFinished: false,
            error: null,
            userAnswers: {},
            currentQuestionIndex: 0,
        })
    },

    getScore: ()=> {
        const {quizData, userAnswers} = get();
        return quizData.reduce(
            (acc, q) => acc = (userAnswers[q.id] === q.correctAnswer ? 1: 0)
        );
    }


}));

export default useQuizStore;
