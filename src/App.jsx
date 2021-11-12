import React from "react";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { pagePaths } from "./utils/constants";
import Success from "./pages/Success";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path={pagePaths.root} exact element={<Home />} />
        <Route
          path={`${pagePaths.products}/:category`}
          element={<ProductList />}
        />
        <Route path={`${pagePaths.product}/:id`} element={<Product />} />
        <Route path={pagePaths.cart} element={<Cart />} />
        <Route
          path={pagePaths.login}
          element={user ? <Navigate to={pagePaths.root} /> : <Login />}
        />
        <Route
          path={pagePaths.register}
          element={user ? <Navigate to={pagePaths.root} /> : <Register />}
        />
        <Route
          path={pagePaths.success}
          element={!user ? <Navigate to={pagePaths.root} /> : <Success />}
        />
      </Routes>
    </Router>
  );
};

export default App;
