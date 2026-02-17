import {Link, Routes, Route} from "react-router-dom";

import TodoApp from "./pages/TodoApp.jsx";
import PersonForm from "./pages/PersonForm.jsx";
import Home from "./pages/Home.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {


  return (
    <main className="container">
        <nav>
            <Link to="/">Home</Link>
            <Link to="/todo-list">Tâches</Link>
            <Link to="/person-form">Formulaire personne</Link>
        </nav>

        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/todo-list" exact element={<TodoApp/>} />
            <Route path="/person-form" exact element={<PersonForm/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </main>
  )
}

export default App
