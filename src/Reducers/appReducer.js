function AppReducer(state, action) {
    console.log(state, action);
    switch (action.type) {
        case 'add_todo':
            return addTodo(state, action);
        case 'delete_todo':
            return deleteTodo(state, action);
        case 'toggle_todo':
            return toggleTodo(state, action);
        case 'edit_todo':
            return editTodo(state, action);
        case 'login_user':
            return {
                ...state,
                authenticated: true
            }
        case 'logout_user':
            return {
                ...state,
                authenticated: false
            }

        default:
            return state;
    }
}

export default AppReducer;

let addTodo = (state, action) => {
    let { todo } = action.payload;
    return {
        ...state,
        todos: [
            ...state.todos,
            todo
        ]
    }
}

let deleteTodo = (state, action) => {
    let { key } = action.payload;
    return {
        ...state,
        todos: state.todos.filter(item => item.key !== key)
    }
}


// let toggleTodo = (state, action) => {
//     let { key } = action.payload;

//     let item = state.todos.find(item => item.key === key)
//     console.log(item.done);
//     item.done = !item.done;
//     console.log(item.done);

//     let newTodos = state.todos.filter(item => item.key !== key)
//     // console.log(newTodos);
//     return {
//         ...state,
//         todos: [
//             ...newTodos,
//             item
//         ]
//     }
// }

let toggleTodo = (state, action) => {
    let { key } = action.payload;

    // Find the index of the todo item to toggle
    let itemIndex = state.todos.findIndex(item => item.key === key);
    if (itemIndex === -1) {
        return state; // If item not found, return current state
    }

    // Create a new array of todos with the toggled item
    let newTodos = [...state.todos]; // Copy the original todos array
    newTodos[itemIndex] = { // Create a new object for the toggled item
        ...newTodos[itemIndex], // Copy existing properties of the item
        done: !newTodos[itemIndex].done // Toggle the 'done' property
    };

    // Return a new state object with the updated todos array
    return {
        ...state,
        todos: newTodos
    };
};


let editTodo = (state, action) => {
    let { key, text } = action.payload;

    let item = state.todos.find(item => item.key === key)
    item.text = text;

    let newTodos = state.todos.filter(item => item.key !== key)
    return {
        ...state,
        todos: [
            ...newTodos,
            item
        ]
    }


}

