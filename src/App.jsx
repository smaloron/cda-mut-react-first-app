import {Link, Routes, Route} from "react-router-dom";

import AppLayout from "./pages/AppLayout.jsx";
import TodoApp from "./pages/TodoApp.jsx";
import PersonForm from "./pages/PersonForm.jsx";
import Home from "./pages/Home.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

function App() {


  return (
    <main className="container">
        <nav>
            <Link to="/">Home</Link>
            <Link to="/app">Applications</Link>
        </nav>

        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/app"  element={<AppLayout/>} >
                <Route path="todo-list"  element={<TodoApp/>} />
                <Route path="person-form"  element={<PersonForm/>} />
            </Route>
            <Route path="/product-details/:id" exact element={<ProductDetails/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </main>
  )
}

export default App
