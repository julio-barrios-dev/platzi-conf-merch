import { useState } from 'react';
import initialState from '../initialState';

const useIntialState = () => { 
  const [state, setState] = useState(initialState);

  const addToCart = payload => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  }

  const removeFromCart = payload => {

    const newCart = state.cart;
    newCart.splice(payload, 1);

    setState({
      ...state,
      cart: newCart,
    })
  } 
  
  return {
    addToCart,
    removeFromCart,
    state
  }

};

export default useIntialState;