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

export const addTodoThunk = createAsyncThunk('todo/Add', async (todoItem: ItodoItem) => {
    return todoItem
})

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        updateStatus: (state, action: PayloadAction<ItodoItem>) => {
            let index = state.listTodo.findIndex(t => t.id === action.payload.id)
            console.log('finded')
            console.log(index)

            if (state.listTodo[index].status === "avaible") {
                state.listTodo[index].status = "progress"
            } else if (state.listTodo[index].status === "progress") {
                state.listTodo[index].status = "complete"
            } else {
                state.listTodo = state.listTodo.filter(t => t.id !== state.listTodo[index].id)
            }
        }
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
export const { updateStatus } = todoSlice.actions