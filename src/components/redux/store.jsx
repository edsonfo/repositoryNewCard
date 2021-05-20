import { createStore } from "redux"

const initialStore = {
  title: "Edson"
}

const reducer = (state = initialStore) => {
  return state
}

export default createStore(reducer)
