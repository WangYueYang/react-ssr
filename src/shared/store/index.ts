import { createStore } from 'redux';

const initState = {
  data: '',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_STATE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};


export const createClientStore = () => {
  return createStore(reducer, (window as any).REDUX_STORE);
};

export const createServerStore = () => {
  return createStore(reducer);
};
