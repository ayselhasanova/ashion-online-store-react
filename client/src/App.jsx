// Css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/splide/css";

// React tools
import { Route, Routes } from "react-router";
import React, { useEffect, useState } from "react";

// Pages
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail/blogdetail";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Favorites from "./Pages/Favorites";
import Cart from "./Pages/Cart";
import Error from "./Pages/Error";
import Preloader from "./Pages/Preloader";

function App() {
  // Preloader
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<BlogDetail />} path="/blogdetail/:postId" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Shop />} path="/shop" />
          <Route element={<Favorites />} path="/favorites" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<Error />} path="*" />
        </Routes>
      )}
    </div>
  );
}

export default App;
