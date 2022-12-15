import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ItodoItem {
    id: Number,
    content: String,
    status: String
}

export interface ITodoSlice {
    listTodo: ItodoItem[]
    status: String
}

const initialState: ITodoSlice = {
    listTodo: [],
    status: ''
}

export const addTodoThunk = createAsyncThunk('todo/Add', async (todoItem: ItodoItem ) => {
    return todoItem
})

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addTodoThunk.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(addTodoThunk.rejected, (state) => {
            state.status = "error"
        })
        builder.addCase(addTodoThunk.fulfilled, (state, action) => {
            state.listTodo = [...state.listTodo, action.payload]
            state.status = "success"
        })
    }
})

export default todoSlice.reducer