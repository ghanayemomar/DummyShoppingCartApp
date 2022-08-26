import React from "react";
import { useReducer } from "react";
import CartContext from "./cart-context";

const defualCartState = {
    item: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    }
    return defualCartState;
};

const CartProvider = (props) => {

  const [cartState,dispatchCartAction] = useReducer(cartReducer , defualCartState);


  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD' , item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type:'REMOVE' , id: id});
  };

  const cartContext = {
    items: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
