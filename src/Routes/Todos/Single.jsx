// import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import todoApi from './../../Api/todos'

export default function SingleTodo() {
    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get('slug'));
    const [loading, setLoading] = useState(false);
    const [todo, setTodo] = useState(null);
    const params = useParams();
    useEffect(() => {
        setLoading(true);
        todoApi.get(`/todos/${params.id}.json`)
            .then(res => {
                // console.log(res);
                setTodo(res.data);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            })
    }, [])

    return (
        <section className="jumbotron">
            <div className="container d-flex flex-column align-items-center">
                <h1 className="jumbotron-heading">Single Todo</h1>
                {
                    loading
                        ? <h2>Loading Data...</h2>
                        : todo && (
                            <div>
                                <h3>
                                    {todo.text}
                                </h3>
                                <h5>
                                    {todo.done ? 'it`s done' : 'it`s not done yet.'}
                                </h5>
                            </div>
                        )
                }
            </div>
        </section>
    )
};