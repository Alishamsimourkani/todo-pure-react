import React, { useReducer, useEffect } from 'react';
import Header from './Layouts/Header';
import FormAddTodo from './Todo/FormAddTodo';
import TodoList from './Todo/TodoList';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';


// import Context
import TodosContext from '../Context/todos';
import AuthContext from '../Context/auth'


// import Reducers
import AppReducer from '../Reducers/appReducer'


function App() {

    const [state, dispatch] = useReducer(AppReducer, {
        todos: [],
        authenticated: false
    })
    let jsonHandler = (data) => {
        let todos = Object
            .entries(data)
            .map(([key, value]) => {
                return {
                    ...value,
                    key
                }
            })

        dispatch({ type: 'init_todo', payload: { todos } })
    }

    useEffect(() => {
        axios.get(`https://react-course-dbeae-default-rtdb.europe-west1.firebasedatabase.app/todos.json`)
            .then(response => jsonHandler(response.data))
            .catch(err => console.log(err))
    }, [])

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
                    <Header />
                    <main>
                        <section className="jumbotron">
                            <div className="container d-flex flex-column align-items-center">
                                <h1 className="jumbotron-heading">Welcome!</h1>
                                <p className="lead text-muted">To get started, add some items to your list:</p>
                                <FormAddTodo />
                            </div>
                        </section>
                        <div className="todosList">
                            <div className="container">
                                <div className="d-flex flex-column align-items-center ">
                                    <TodoList />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </TodosContext.Provider>
        </AuthContext.Provider>
    )
}


export default App;