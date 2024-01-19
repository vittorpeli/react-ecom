import { createContext, useEffect, useState} from "react";
// import { PropTypes } from "prop-types";

export const CartContext = createContext();

const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const addToCart = (id) => {
    setCartItems((prevItems) => [...prevItems, id]);
  }

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item !== id);
    setCartItems(updatedCart);
  }

  const inCart = (id) => {
    return cartItems.includes(id);
  }

  const getCartItem = () => {
    return cartItems;
  }

  const getItemsInCart = (items) => {
    return items.filter((item) => {
      return inCart(item.id);
    });
  }

  const clearCart = () => {
    setCartItems([]);
  }

  useEffect(() => {
    saveCartToLocalStorage(cartItems);
  }, [cartItems])

  return (
    <CartContext.Provider value={{addToCart, inCart, getItemsInCart, getCartItem, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

