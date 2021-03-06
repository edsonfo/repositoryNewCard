import React, { useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { addItem, deleteItem, deleteItemsToDoList } from '../actions/rootActions'

import "./card.css";

const CardItem = ({ todo }) => {
  const [todoState, setTodoState] = useState({ ...todo,message:'', checked: false })
  const dispatch = useDispatch()
  const handleOnChangeMessage = (prop) => (event) => {
    const {
      target: { value }
    } = event
    setTodoState({ ...todoState, [prop]: value })
  }
  const handleChangeCheckbox = (event) => {
    const {
      target: { checked }
    } = event
    checked ? dispatch(addItem(todo)) : dispatch(deleteItem(todo.id))
    setTodoState({ ...todoState, checked: checked })
  }
  return (
    <InputGroup style={{ margin: "10px" }}>
      <InputGroup.Prepend>
        <InputGroup.Checkbox
          checked={todoState.checked}
          onChange={handleChangeCheckbox}
        />
      </InputGroup.Prepend>
      <FormControl
        value={todoState.message}
        onChange={handleOnChangeMessage("message")}
      />
      <Button
        onClick={() => dispatch(deleteItemsToDoList())}
        disabled={!todoState.checked}
      >
        Delete
      </Button>
    </InputGroup>
  )
}

CardItem.propTypes = {
  todo: PropTypes.object.isRequired,

};
export default CardItem
