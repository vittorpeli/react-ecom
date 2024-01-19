import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CartProvider } from './contexts/CartContext.jsx';

import './global.css'

import ErrorPage from './error-page.jsx';
import { Product } from './pages/Product.jsx';
import { Home } from './pages/Home.jsx';
import { Cart } from './pages/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/photo/:id",
    element: <Product />
  },
  {
    path: "/checkout",
    element: <Cart />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)