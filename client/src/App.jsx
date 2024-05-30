// Css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/splide/css";

// React tools
import { Route, Routes } from "react-router";
import { Provider } from 'react-redux';
import store from './redux/store';

// Pages
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail/blogdetail";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Favorites from "./Pages/Favorites";
import Cart from "./Pages/Cart";

function App() {
  return (
    <Provider store={store}>
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
    // </Provider>
  );
}

export default App;
