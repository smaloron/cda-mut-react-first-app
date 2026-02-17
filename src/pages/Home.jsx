import logo from "../../public/vite.svg";
import Adults from "./Adults.jsx";
import Children from "./Children.jsx";


function Home(){
    const person = {
        name: 'John',
        age: 20,
    }

    const calculateNewAge = (years) => person.age + years;

    return (
        <main className="container">
            <p>Hello {person.name} vous avez {person.age}</p>
            <p>Dans un an vous aurez {calculateNewAge(1)}</p>

            <img src={logo} alt="logo" />

            {person.age > 18? <Adults name={person.name} age={person.age}/>: <Children />}

            <Adults name="Amélie" age="26" />
        </main>
    )
}

export default Home;
