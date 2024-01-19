import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    setCartItems((prevItems) => [...prevItems, id]);
  }

  const getCartItem = () => {
    return cartItems;
  }

  return (
    <CartContext.Provider value={{ addToCart, getCartItem}}>
      {children}
    </CartContext.Provider>
  )
}