function Navigation({isFirstQuestion, isLastQuestion, hasAnswer, onNext, onPrev}) {
    return (
        <nav>
            <button onClick={onPrev} disabled={isFirstQuestion}>Précédent</button>

            <button onClick={onNext} disabled={!hasAnswer}>
                {isLastQuestion ? "Valider" : "Suivant"}
            </button>

        </nav>
    )
}

export default Navigation;
