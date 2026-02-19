import {Link, Routes, Route} from "react-router-dom";

import AppLayout from "./pages/AppLayout.jsx";
import TodoApp from "./pages/TodoApp.jsx";
import PersonForm from "./pages/PersonForm.jsx";
import Home from "./pages/Home.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Quiz from "./quiz/Quiz.jsx";
import BookList from "./pages/BookList.jsx";
import {useEffect} from "react";

import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import useAuthStore from "./stores/useAuthStore.js";

function App() {
    const init = useAuthStore((state) => {state.init});
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);

    //Vérification du token au montage du composant
    useEffect(() => {
        init();
    }, [init]);




  return (
    <main className="container">
        {user && <h3>Vous êtes connecté en tant que : {user.name}</h3>}
        <nav>
            {user && <button onClick={logout} className="outline">Logout</button>}
            {!user && <Link to="/login">Connexion </Link>}
        </nav>

        <nav>
            <Link to="/">Home</Link>
            <Link to="/app">Applications</Link>
        </nav>

        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/register" exact element={<RegisterPage />} />
            <Route path="/app"  element={<AppLayout/>} >

                <Route path="person-form"  element={<PersonForm/>} />

                <Route path="quiz" element={
                    <ProtectedRoute><Quiz/></ProtectedRoute>
                } />
                <Route path="todo-list"  element={<TodoApp/>} />


                <Route path="booklist" element={<BookList/>} />
            </Route>
            <Route path="/product-details/:id" exact element={<ProductDetails/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </main>
  )
}

export default App
