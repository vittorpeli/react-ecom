import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem((prevItems) => [...prevItems, item])
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