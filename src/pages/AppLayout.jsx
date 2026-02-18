import {Link, Outlet} from "react-router-dom";

function AppLayout(){
    return (
        <div className="container">

            <header>
                <h1>Applications</h1>

            </header>


            <nav>
                    <Link to="/app/todo-list">Liste des tâches</Link>
                    <Link to="/app/person-form">Formulaire</Link>
                    <Link to="/app/quiz">Quiz</Link>
            </nav>

            <div>
                <Outlet />
            </div>

        </div>
    )
}

export default AppLayout;
