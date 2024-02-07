import React from "react";

const todosContext = React.createContext({
    todos: [],
    add: () => { },
    done: () => { },
    delete: () => { },
    edit: () => { }
})




export default todosContext
