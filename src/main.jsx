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
import { SuccessPage } from './pages/SuccessPage.jsx';
import { Login } from './pages/Auth/Login.jsx';
import { Signup } from './pages/Auth/Signup.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { Add } from './pages/Add.jsx';
import { Edit } from './pages/Edit.jsx';

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
  },
  {
    path: "/success",
    element: <SuccessPage />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/add",
    element: <Add />
  },
  {
    path: "/edit/:id",
    element: <Edit />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)