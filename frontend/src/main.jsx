import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavigationBar from './component/common/NavigationBar.jsx';
import About from './pages/Home/About.jsx';
import Contact from './pages/Home/Contact.jsx';
import CartPage from './pages/Cart/CartPage.jsx';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx';
import MyOrders from './pages/MyOrders/MyOrders.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StoreContextProvider from './component/context/StoreContext.jsx';
import ProductDisplay from './component/productDisplay/ProductDisplay.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/NavigationBar",
    element: <NavigationBar />,
  },
  {
    path: "/ProductDisplay",
    element: <ProductDisplay />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/CartPage",
    element: <CartPage />,
  },
  {
    path: "/Order",
    element: <PlaceOrder />,
  },
  {
    path: "/myorders",
    element: <MyOrders/>,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>
  </React.StrictMode>,
);