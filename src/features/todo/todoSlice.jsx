import { createSlice ,nanoid} from "@reduxjs/toolkit";


const initailState = {
    todos : [{id:1,message :"Hey "}]
}


export const todoSlice = createSlice({
    name : 'todo',
    initialState: initailState,
    reducers : {
        addTodo : (state,action)=>{
            const todo = { 
                id:nanoid,
                message : action.payload
            }
            state.todos.push(todo);
        },
        deleteTodo : (state,action)=>{
            state.todos = state.filter((todo)=>todo.id !== action.payload)
        }
    }
})

export const {addTodo,deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;