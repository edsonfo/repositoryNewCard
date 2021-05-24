import React, { useContext } from 'react'
import { Badge, Button, Container } from 'react-bootstrap'
import CardItem from '../item/CardItem'
import { useDispatch, useSelector } from 'react-redux'
import ContextTheme from '../context/ContextTheme'
import { addItemToDoList } from  '../actions/rootActions'

  const List = () => {
    const { title, toDoList } = useSelector(state => ({
      title: state.title,
      toDoList: state.toDoList,
    }))
    const dispatch = useDispatch()
    const { themeState, changeTheme } = useContext(ContextTheme)
  
    return (
      <Container
        style={{
          marginTop: "70px",
          border: "1px solid black",
          background: themeState.background
        }}
        >
        <Button onClick={changeTheme}>
          Change Theme
        </Button>
        <h1>
          <Badge>{title}</Badge>
        </h1>
        {toDoList.map((todo) => (
          <CardItem key={todo.id} todo={todo} theme={themeState} />
        ))}
      <Button onClick={() => dispatch(addItemToDoList())}>
        Add
      </Button>
      </Container>
    )
  }
export default List
