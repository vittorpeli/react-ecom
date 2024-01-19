import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (id) => {
    const updatedCart = {...cartItem, [id]: true};
    setCartItem(updatedCart);
  }

  const getCartItem = () => {
    return cartItem;
  }

  return (
    <CartContext.Provider value={{ addToCart, getCartItem}}>
      {children}
    </CartContext.Provider>
  )
}