import { createStore } from 'redux';


const initState = {
  data: ''
}

function reducer(state = initState, action) {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        ...action.payload
      }
    default:
      return {...state}
  }
}

export function createClientStore() {
  createStore(reducer)
}

export function createServerStore() {
  createStore(reducer)
}