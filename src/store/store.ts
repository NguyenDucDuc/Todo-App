import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import TodoSlice from "../slices/TodoSlice";



export const store = configureStore({
    reducer: {
        todo: TodoSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
