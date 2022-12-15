import { Alert, Button, Card, Col, Row } from "antd"
import React from "react"
import { useSelector } from "react-redux"
import { ItodoItem, updateStatus } from "../slices/TodoSlice"
import { RootState, useAppDispatch } from "../store/store"



export const List: React.FC = () => {
    const listTodo = useSelector((state: RootState) => state.todo.listTodo)
    const dispatch = useAppDispatch()
    const handleChangeStatus = (todoItem: ItodoItem) => {
       dispatch(updateStatus(todoItem))
    }
    return (
        <div style={{ width: '80%', margin: '0 auto' }}>
            <h3>List Todo</h3>
            <Row>
                {listTodo.length > 0 ? listTodo.map((t, idx) => {
                    return <Col span={5} key={idx} style={{ margin: '20px 20px', }}>
                        <Alert
                            message="Todo Content"
                            showIcon
                            description={t.content}
                            type={t.status === 'avaible' ? 'info' : t.status === "progress" ? "warning" : "success"}
                            action={
                                <Button size="middle" onClick={() => handleChangeStatus(t)} danger style={{ background: t.status === 'avaible' ? '#ff1a1a' : t.status === 'progress' ? '#0099ff' : '#00b359', color: 'white' }}>
                                    {t.status}
                                </Button>
                            }
                        />
                    </Col>
                })

                    : null
                }

            </Row>
        </div>
    )
}