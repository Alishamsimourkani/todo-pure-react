import React, { useState, useEffect, useContext } from 'react'
import FormAddTodo from './../Components/Todo/FormAddTodo';
import TodoList from './../Components/Todo/TodoList';
import todoApi from './../Api/todos'

// import Context
import TodosContext from '../Context/todos';

export default function Home() {

    // const [loadeing, setLoading] = useState();

    const todoContext = useContext(TodosContext);

    let jsonHandler = (data) => {
        let todos = Object
            .entries(data)
            .map(([key, value]) => {
                return {
                    ...value,
                    key
                }
            })

        todoContext.dispatch({ type: 'init_todo', payload: { todos } })
    }

    useEffect(() => {
        todoApi.get(`/todos.json`)
            .then(response => jsonHandler(response.data))
            .catch(err => console.log(err))
    }, [])

    return (
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
    )
}