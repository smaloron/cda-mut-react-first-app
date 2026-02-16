function Adults({name, age}){
    const notes = [16, 8, 12];

    const notesList = notes.map((note, i) => (
        note > 10 && <li key={i}>{note}</li>
    ));

    return (
        <div>
            <h1>Vous êtes adulte : {name}</h1>
            <h2>Puisque vous avez {age} ans</h2>

            <ul>
                {notesList}
            </ul>
        </div>
    );
}

export default Adults;
