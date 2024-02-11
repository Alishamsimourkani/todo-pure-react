import React, { useReducer } from 'react';
import Header from './Layouts/Header';

// import style
import 'bootstrap/dist/css/bootstrap.css'

// import Context
import TodosContext from '../Context/todos';
import AuthContext from '../Context/auth'

// import Reducers
import AppReducer from '../Reducers/appReducer'

// import Rotes
import { Routes, Route } from "react-router-dom";
import Home from './../Routes/Home'
import Contact from "./../Routes/Contact";
import About from "./../Routes/About";
import ErrorPage from "./../error-page";
import SingleTodo from '../Routes/Todos/Single';

function App() {

    const [state, dispatch] = useReducer(AppReducer, {
        todos: [],
        authenticated: false
    })


    return (
        <AuthContext.Provider value={{
            authenticated: state.authenticated,
            dispatch
        }}>

            <TodosContext.Provider value={{
                todos: state.todos,
                dispatch
            }}>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Header />}>
                            <Route index element={<Home />} />
                            <Route path="contact-us" element={<Contact />} />
                            <Route path="about-us" element={<About />} />
                            <Route path="todos/:id" element={<SingleTodo />} />
                        </Route>
                    </Routes>
                </div>
            </TodosContext.Provider>
        </AuthContext.Provider>
    )
}


export default App;