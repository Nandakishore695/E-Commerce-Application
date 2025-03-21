import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from 'react-redux';
import { store } from './component/redux/store.jsx';
import './index.css'
import Layout from './layout.jsx';
import Login from "./component/User/Login.jsx";
import Register from "./component/User/Register.jsx";
import Product from './component/Product/ShowProduct.jsx';
import Footer from './footer.jsx';
import Cart from "./component/User/Cart.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Layout />
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  </StrictMode >,
)
