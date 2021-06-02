import React, { useContext, useEffect } from 'react'
import { Badge, Button, Container, Spinner } from 'react-bootstrap'
import CardItem from '../item/CardItem'
import { useDispatch, useSelector } from 'react-redux'
import ContextTheme from '../context/ContextTheme'
import { addItemToDoList, fetchPokemons } from  '../actions/rootActions'

  const List = () => {
    const { title, toDoList, itemsFinish, isLoading } = useSelector(state => ({
      title: state.title,
      toDoList: state.toDoList,
      isLoading: state.isLoading,
      itemsFinish: state.itemsFinish
    }))
    const dispatch = useDispatch()
    const { themeState, changeTheme } = useContext(ContextTheme)
    
    useEffect(() => {
      dispatch(fetchPokemons())
    }, [dispatch])
  
    return isLoading ? (
      <Spinner
        animation='border'
        role='status'
        style={{ position: 'fixed', marginTop: '200px' }}
      >
        <span className='sr-only'>Loading...</span>
      </Spinner>
     ) : (
      <Container
        style={{
          marginTop: "70px",
          border: "1px solid black",
          background: themeState.background
        }}
        >
        <Button onClick={changeTheme}>
          Change
        </Button>
        <h1>
          <Badge>{title}</Badge>
        </h1>
        <h4>
          <Badge pill variant='info'>
            {itemsFinish.length}
          </Badge>
        </h4>
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
