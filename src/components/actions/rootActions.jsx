import {
  ADD_ITEM_LIST,
  DELETE_ITEM_LIST,
  DELETE_ITEMS_TO_DO_LIST,
  ADD_ITEM_TO_DO_LIST, 
  FETCH_POKEMONS_START,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR
} from '../constants/roodConstants'

import Client from './PokeAxios'

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

export const fetchPokemonsStart = () => ({
  type: FETCH_POKEMONS_START
})

export const fetchPokemonsSuccess = payload => ({
  type: FETCH_POKEMONS_SUCCESS,
  payload
})

export const fetchPokemonsError = error => ({
  type: FETCH_POKEMONS_ERROR,
  error
})

export const fetchPokemons = () => {
  return async dispatch => {
    try {
      dispatch(fetchPokemonsStart())
      const { 
        data: { results }
       } = await Client.get('/pokemon')
      const pokemons = results.map((pokemon,id)=>({
        ...pokemon,
        id: id+1
      }))
      dispatch(fetchPokemonsSuccess(pokemons))
    } catch (error) {
      dispatch(fetchPokemonsError(error))
    }
  }
}