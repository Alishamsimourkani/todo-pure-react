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
import Home from './../Routes/Home'

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
                    <Header />
                    <Home />
                </div>
            </TodosContext.Provider>
        </AuthContext.Provider>
    )
}


export default App;