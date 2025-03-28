import {createSlice, nanoid} from '@reduxjs/toolkit';
import { toast } from "react-toastify";
//1. The below one is the actual store/data but related to a particular feature only. 
// In project there could be multiple features, so we will create multiple slices for them and we know very well slice is basically used to store data variable/states and methods that work on that data. 
const initialState = {
    todos: [],
    gisEditing: false,
    gEditingId: null,
    gEditingTitle: ''
}
// Only a single Initial state object will be there in a slice. Yeah it can contain multiple key:value pairs.


// 2. Now, we will create a slice.

const todoSlice = createSlice({
    name: 'ashish', // name of the slice. But choose it according to the job. Like here 'todo' name would be better.
    // initialState: initialState, // initial state of the slice. We can define the state here also that we have defined above. 
    initialState, // If key and value are same then we can write like this also.

    // reducers: {} // reducers are the methods that work on the data of the slice.
    // reducers contains key:value/function pairs. These function we can define here/somewhere else in the same file/or in some other file as well. And, we make these function in some other file in case of big projects and import them here and use their name directly.
    reducers: {

        setTodos: (state, action) => {
            state.todos = action.payload; // Load todos when app starts
        },

        // the method always have the access of "state"/current state of the slice. 
        // And, the action is the data/object that we pass from component to the reducer method. So, that changes can be made in database/state of slice.
        addTodo: (state, action) =>{
            if (action.payload.trim().length <= 2) {
                toast.error("Todo title must be longer than 2 characters!", {
                    position: "top-center",
                    autoClose: 3000, // Closes after 3s
                });
                return;
            }
            const todo = {
                id: nanoid(),
                title: action.payload, 
                isEditing: false, 
                isDone: false,
            }
            // state.todos.push(todo)     // Here we have updated the state/data of slice. But added a new todo at the end
            state.todos.unshift(todo) // Added a new todo at the beginning.
            localStorage.setItem("todos", JSON.stringify(state.todos));
            toast.success("Todo added successfully!", {
                position: "top-center",
                autoClose: 3000,  // Closes after 3 seconds
            }); 
        }, 
        removeTodo: (state, action) =>{
            const {id} = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if(todo.isEditing){
                toast.error("You cannot delete a todo while editing!", {
                    position: "top-center",
                    autoClose: 3000, // Closes after 3s
                });
            }
            else{
                state.todos = state.todos.filter(todo => todo.id !== id);
                localStorage.setItem("todos", JSON.stringify(state.todos));
            } 
        },
        editTodo: (state, action) =>{
            if (action.payload.title.trim().length <= 2) {
                toast.error("Todo title must be longer than 2 characters!", {
                    position: "top-center",
                    autoClose: 3000, // Closes after 3s
                });
                return;
            }
            const {id, title} = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if(todo){
                todo.title = title;
                todo.isEditing=false;
            }
            localStorage.setItem("todos", JSON.stringify(state.todos));
        }, 
        enableEdit: (state, action) =>{
            if(state.gisEditing){
                toast.error("You cannot edit a todo while editing another one!", {
                    position: "top-center",
                    autoClose: 3000, // Closes after 3s
                });
                return;
            }
            const {id} = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {

                state.gisEditing = true; 
                todo.isEditing = true; 
                state.gEditingTitle = todo.title; 
                state.gEditingId = id;
            } 
        },
        disableEdit: (state, action) =>{
            if(!state.gisEditing){
                toast.error("Nothing is in the Editing state!", {
                    position: "top-center",
                    autoClose: 3000, // Closes after 3s
                });
                return;
            }
            const {id} = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                state.gisEditing = false; 
                todo.isEditing = false; 
                state.gEditingTitle = ''; 
                state.gEditingId = null;
            }
        },
        markAsDone : (state, action) =>{
            const {id} = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if(todo){
                todo.isDone = !todo.isDone; // Toggle the isDone property
            }
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        reorderTodos: (state, action) =>{
            state.todos = action.payload;
            localStorage.setItem("todos", JSON.stringify(state.todos));
        }

    }
})

export const {setTodos, addTodo, removeTodo, editTodo, enableEdit, disableEdit, markAsDone, reorderTodos} = todoSlice.actions;     // We have to export all the methods that we have defined in reducers. So, that we can use them in the components.


// Now we have to export reducers as well. So, that store-file have an idea that these are the registered methods that can perform CRUD operations. 
export default todoSlice.reducer; // reducer is the key that is used to register the reducers/methods in the store.



// Now: 
// Now we can us these state variables (intitial state) in any of the component. Also these methods. 
// But we have to use two hooks for that. useSelector and useDispatch. to use these methods and perform CRUD operations. 