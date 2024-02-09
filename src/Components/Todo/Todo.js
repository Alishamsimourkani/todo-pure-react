import React, { useState, useContext } from 'react';
import EditTodo from './EditTodo';
import TodosContext from '../../Context/todos';
import axios from 'axios';

export default function Todo(props) {

    const { item } = props;
    const [edit, setEdit] = useState(false);
    const todosContext = useContext(TodosContext);

    let editHandler = text => {
        todosContext.dispatch({ type: 'edit_todo', payload: { key: item.key, text } });
        setEdit(false)
    }
    let deleteHandler = e => {
        // ajax
        axios.delete(`https://react-course-dbeae-default-rtdb.europe-west1.firebasedatabase.app/todos/${item.key}.json`)
            .then(response => {
                console.log(response.data);
                todosContext.dispatch({ type: 'delete_todo', payload: { key: item.key } })
            })
            .catch(err => { console.log(err) })
    }
    return (
        <>
            {
                !edit
                    ? (
                        <div className="col-6 mb-2">
                            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                                <div>
                                    {item.text}
                                </div>
                                <div>
                                    <button type="button" className={`btn btn-sm m-1 ${item.done ? 'btn-outline-primary' : 'btn-success'}`} onClick={() => todosContext.dispatch({ type: 'toggle_todo', payload: { key: item.key } })}>{item.done ? "Undone" : "Done"}</button>
                                    <button type="button" className="btn btn-info btn-sm m-1" onClick={() => setEdit(true)}>edit</button>
                                    <button type="button" className="btn btn-danger btn-sm m-1" onClick={deleteHandler}>delete</button>
                                </div>
                            </div>
                        </div>
                    )
                    : <EditTodo text={item.text} edit={editHandler} />
            }
        </>

    )
};
