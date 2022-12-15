import { Button, Input, Select } from "antd"
import { Option } from "antd/es/mentions"
import { useState } from "react"
import {v5 as uuid} from "uuid"
import { addTodoThunk, ItodoItem } from "../slices/TodoSlice"
import { useAppDispatch } from "../store/store"



export const Controller = () => {
    const [content, setContent] = useState<String>('')
    const [status, setStatus] = useState<String>('avaible')
    const dispatch = useAppDispatch()
    const handleAddTodo = () => {
        const id = Math.floor(Math.random()*90000) + 10000;
        const newTodoItem: ItodoItem = {
            id: id,
            content: content,
            status: status
        }
        dispatch(addTodoThunk(newTodoItem))
        
    }
    return (
        <div style={{width: '40%', margin: '0 auto'}}>
            <Input type="text" onChange={e => setContent(e.target.value)}/>
            <Select placeholder="select status" style={{display: 'block', marginTop: '20px'}} onChange={val => setStatus(val)}>
                <Option value="avaible">Avaible</Option>
                <Option value="progress">Progress</Option>
                <Option value="complete">Complete</Option>
            </Select>
            <Button type="primary" style={{marginTop: '10px'}} onClick={handleAddTodo}>Add todo</Button>
            
        </div>
    )
}