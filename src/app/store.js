import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; // Name can be anything at the place of todoReducer. But choose a name that is related to the job like here "todoReducer" is a better choice.

export const store = configureStore({
    // reducer: {
        // todos: todoReducer
        // todoReducer
        // Both the upper ways are correct. 
        // And, we can provide multiple values/reducers list here.
    // }

    // As, now we have only a single reducer.
    reducer: todoReducer
});

// Here we are just saying that we are creating a storing nothing else. This is just a JS file. 
// But we have to import those reducers/actions from "Slice" files, because only then those methods/reducers/actions can update values of variables present in the store/slice. 

// Note: There will be only a single store in the entire application.


// Don't forget below thing inside main.jsx or App.jsx
{/* <Provider store={store}>
<App />
</Provider>, */}
// The upper thing is necessary to make a final connection of Redux with react. 