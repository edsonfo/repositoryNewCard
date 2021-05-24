import {
  ADD_ITEM_LIST,
  DELETE_ITEM_LIST,
  DELETE_ITEMS_TO_DO_LIST,
  ADD_ITEM_TO_DO_LIST
} from '../constants/roodConstants'

export const addItem = item => ({
  type: ADD_ITEM_LIST,
  data: item
})

export const deleteItem = id => ({
  type: DELETE_ITEM_LIST,
  data: id
})

export const deleteItemsToDoList = () => ({
  type: DELETE_ITEMS_TO_DO_LIST
})

export const addItemToDoList = () => ({
  type: ADD_ITEM_TO_DO_LIST
})