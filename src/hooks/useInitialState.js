import { useState } from 'react';
import initialState from '../initialState';

const useIntialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    const newCart = state.cart;
    newCart.splice(payload, 1);

    setState({
      ...state,
      cart: newCart,
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };
  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    handleSumTotal,
    state
  };
};

export default useIntialState;
