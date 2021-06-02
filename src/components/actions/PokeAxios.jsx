import axios from 'axios'

const Client = axios.create({
  baseURL:'https://pokeapi.co/api/v2'
})

export default Client