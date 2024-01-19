import { createContext, useState} from "react";
// import { PropTypes } from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    setCartItems((prevItems) => [...prevItems, id]);
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

  // const persistCart = () => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }

  // useEffect(() => {
  //   persistCart();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [cartItems])

  return (
    <CartContext.Provider value={{cartItems, addToCart, inCart, getItemsInCart, getCartItem}}>
      {children}
    </CartContext.Provider>
  )
}

