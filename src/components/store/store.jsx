import {applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { ADD_ITEM_LIST,
  DELETE_ITEM_LIST,
  DELETE_ITEMS_TO_DO_LIST,
  ADD_ITEM_TO_DO_LIST,
  FETCH_POKEMONS_START,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR 
  } from '../constants/roodConstants'


const initialStore = {
    title: "TO DO LIST",
    toDoList:  [],
    itemsFinish: [],
    countToDoList: 0,
    isLoading: false,
    errorMessage: ''
 }

const deleteItemToDoList = state => {
  let newTodoList = state.toDoList
  state.itemsFinish.forEach(item => {
    newTodoList = newTodoList.filter(todo => todo.id !== item.id)
  })
  return newTodoList
}

const reducer = (state = initialStore, action) => {
    switch (action.type) {
      case ADD_ITEM_LIST:
        return {
          ...state,
          itemsFinish: state.itemsFinish.concat(action.data)
        }
  
      case DELETE_ITEM_LIST:
        return {
          ...state,
          itemsFinish: state.itemsFinish.filter((item) => item.id !== action.data)
        }
      
        case DELETE_ITEMS_TO_DO_LIST:
          return {
            ...state,
            toDoList: deleteItemToDoList(state),
            itemsFinish: []
          }

        case ADD_ITEM_TO_DO_LIST:
          return {
            ...state,
            toDoList: state.toDoList.concat({
              id: state.countToDoList + 1,
              message: ''
            }),
            countToDoList: state.countToDoList + 1
          }

        case FETCH_POKEMONS_START:
          return {
            ...state,
            errorMessage:'',
            isLoading: true
          }
        

        case FETCH_POKEMONS_SUCCESS:
          const{ payload } = action
          return {
            ...state,
            items:payload,
            isLoading: false,
            countItems: action.payload.length
          }
        

        case FETCH_POKEMONS_ERROR: 
          const{ error } = action
          return {
            ...state,
            errorMessage: error,
            isLoading: false
          }
        
        
      default:
        return state
    }
  }
  
  export default createStore(reducer,applyMiddleware(thunk))