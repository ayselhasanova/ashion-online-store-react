// React tools
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFav } from "../../redux/actions/favActions";
import { addToCart } from "../../redux/actions/cartActions";

// CSS
import "../../assets/css/reset.css";
import "./style.css";

// Prime Items Icon
import "primeicons/primeicons.css";

// SplideJS Slider
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Instagram from "../../components/Instagram";
import Shop from "../Shop";

const url = "http://localhost:3000/api/products/";

// Hot trends, Bestsellers, Feautures
const groupByCategory = (data) => {
  const groupedData = {
    trend: [],
    bestsellers: [],
    feauture: [],
  };

  data.forEach((product) => {
    if (product.category === "trend") {
      groupedData.trend.push(product);
    } else if (product.category === "bestsellers") {
      groupedData.bestsellers.push(product);
    } else if (product.category === "feauture") {
      groupedData.feauture.push(product);
    }
  });

  return groupedData;
};

const Home = () => {
  // New Products
  const [category, setCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products/");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); //
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToFav = (product) => {
    dispatch(addToFav(product));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const newProducts = products.filter((product) => product.newproduct === true);


  // Hot trends, Bestsellers, Feautures
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error while fetching:", error);
      }
    };

    fetchData();
  }, []);

  const renderStarIcons = (quantity) => {
    return Array.from({ length: quantity }, (_, index) => (
      <span
        key={index}
        className="pi pi-star-fill"
        style={{ color: "coral" }}
      ></span>
    ));
  };

  const groupedData = groupByCategory(data);

  // Discount-countdown
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const targetDate = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      now.getDate()
    );
    const timeDiff = targetDate.getTime() - now.getTime();

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <>
      <Header />
      <section id="categories">
        <div className="container-categories d-flex justify-content-between">
          <div className="col-6">
            <div className="womens-fashion-img d-flex align-items-center">
              <div className="categories_text_woman">
                <h2> Women's fashion </h2>
                <p>
                  Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                  incidid-unt labore edolore magna aliquapendisse ultrices
                  gravida.
                </p>
                <Link to="/shop"> Shop now</Link>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="mens-fashion">
              <div className="mens-fashion-img d-flex align-items-center">
                <div className="categories_text">
                  <h4> Men's fashion </h4>
                  <p>358 items</p>
                  <a href=""></a>
                  <Link to="/shop"> shop now </Link>
                </div>
              </div>
            </div>
            <div className="cosmetics">
              <div className="cosmetics-img d-flex align-items-center">
                <div className="categories_text">
                  <h4> Cosmetics</h4>
                  <p>358 items</p>
                  <Link to="/shop"> Shop now</Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="kids-fashion">
              <div className="kids-fashion-img d-flex align-items-center">
                <div className="categories_text">
                  <h4> Kid's fashion </h4>
                  <p>358 items</p>
                  <Link to="/shop"> Shop now</Link>{" "}
                </div>
              </div>
            </div>
            <div className="accessories">
              <div className="accessories-img d-flex align-items-center">
                <div className="categories_text">
                  <h4> Accessories</h4>
                  <p>358 items</p>
                  <Link to="/shop"> Shop now</Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* New product start*/}
      <section>
        <div className="newproduct">
          <div className="newproduct-heading d-flex justify-content-between">
            <div className="newproduct-name col-3">
              <p>NEW PRODUCT</p>
            </div>
            <div className="newproducts-categories">
              <ul
                typeof="none"
                className="d-flex col-2 np-categories-list justify-content-between align-items-center"
              >
                <li>
                  <a href="">All</a>
                </li>
                <li>
                  <a href="">Women's</a>
                </li>
                <li>
                  <a href="">Men's</a>
                </li>
                <li>
                  <a href="">Kid's</a>
                </li>
                <li>
                  <a href="">Accessories</a>
                </li>
                <li>
                  <a href="">Cosmetics</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="newproduct-content">
            <ul className="product-list">
              {newProducts.map((product) => (
                <li key={product._id} className="np-item">
                  <div className="product-img">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                    <div className="overlay-product d-flex justify-content-center align-items-center">
                      <div className="overlay-product-content">
                        <div className="d-flex justify-content-center">
                          <ul className="fav-cart">
                            <li onClick={() => handleAddToFav(product)}>
                              <span className="pi pi-heart"></span>
                            </li>
                            <li onClick={() => handleAddToCart(product)}>
                              <span className="pi pi-shopping-cart"></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-info">
                    <p>{product.name}</p>
                    {renderStarIcons(product.quantity)}
                    <p>
                      {product.price}
                      <span className="red"> $</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* New product end*/}

      {/* Slider start*/}
      <section>
        <div className="slider-img d-flex align-content-center">
          <div className="slider">
            <Splide
              options={{
                type: "loop",
                rewind: true,
                autoplay: true,
                interval: 2000,
                pauseOnHover: false,
                arrows: true,
                pagination: true,
              }}
              aria-label="My Favorite Images"
            >
              <SplideSlide className="slide">
                <div className="slider-content">
                  <p className="red">The Chloe Collection</p>
                  <p className="font-cookie">The Project Jacket</p>
                  <a href="/">SHOP NOW</a>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="slider-content">
                  <p className="red">The Chloe Collection</p>
                  <p className="font-cookie">The Project Jacket</p>
                  <a href="/">SHOP NOW</a>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="slider-content">
                  <p className="red">The Chloe Collection</p>
                  <p className="font-cookie">The Project Jacket</p>
                  <a href="/">SHOP NOW</a>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </section>
      {/* Slider end */}

      {/* Hot Trends, Bestsellers, Features start*/}
      <section id="ht-bs-f">
        <div className="product-container d-flex justify-content-center">
          <div className="col-4 trend">
            <h2>Trend </h2>
            {groupedData.trend.map((product) => (
              <div key={product._id} className="product-item d-flex">
                <div className="ht-bs-f-img">
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "90px", height: "90px" }}
                  />
                  <div className="overlay-tbf-product d-flex justify-content-center align-items-center">
                    <div className="overlay-product-content">
                      <div className="d-flex justify-content-center">
                        <ul className="tbf-fav-cart">
                          <li onClick={() => handleAddToFav(product)}>
                            <span className="pi pi-heart"></span>
                          </li>
                          <li onClick={() => handleAddToCart(product)}>
                            <span className="pi pi-shopping-cart"></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ht-bs-f-content">
                  <p>{product.name}</p>
                  <div> {renderStarIcons(product.quantity)}</div>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-4 bestseller">
            <h2>Bestsellers</h2>
            {groupedData.bestsellers.map((product) => (
              <div key={product._id} className="product-item d-flex">
                <div className="ht-bs-f-img">
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "90px", height: "90px" }}
                  />
                  <div className="overlay-tbf-product d-flex justify-content-center align-items-center">
                    <div className="overlay-product-content">
                      <div className="d-flex justify-content-center">
                        <ul className="tbf-fav-cart">
                          <li>
                            <span className="pi pi-heart"></span>
                          </li>
                          <li>
                            <span className="pi pi-shopping-cart"></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ht-bs-f-content">
                  <p>{product.name}</p>
                  <div> {renderStarIcons(product.quantity)}</div>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-4 feauture">
            <h2>Feauture</h2>
            {groupedData.feauture.map((product) => (
              <div key={product._id} className="product-item d-flex">
                <div className="ht-bs-f-img">
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "90px", height: "90px" }}
                  />
                  <div className="overlay-tbf-product d-flex justify-content-center align-items-center">
                    <div className="overlay-product-content">
                      <div className="d-flex justify-content-center">
                        <ul className="tbf-fav-cart">
                          <li>
                            <span className="pi pi-heart"></span>
                          </li>
                          <li>
                            <span className="pi pi-shopping-cart"></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ht-bs-f-content">
                  <p>{product.name}</p>
                  <div> {renderStarIcons(product.quantity)}</div>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Hot Trends, Bestsellers, Features end*/}

      {/* Discount section start */}
      <section id="discount">
        <div className="discount-bg d-flex">
          <div className="discount-img col-6"></div>
          <div className="countdown col-6">
            <div className="discount-heading d-flex align-items-center">
              <div className="discount-heading-text">
                <p className="discount">DISCOUNT</p>
                <p className="summer2019">Summer 2019</p>
                <p className="sale">
                  Sale <span className="percentage">50%</span>{" "}
                </p>
              </div>
            </div>
            <div className="discount-content d-flex justify-content-center">
              <p>
                <span className="time">{timeRemaining.days}</span>
                <span className="time2">Day</span>
              </p>
              <p>
                <span className="time">{timeRemaining.hours}</span>
                <span className="time2">Hour</span>{" "}
              </p>
              <p>
                <span className="time">{timeRemaining.minutes}</span>
                <span className="time2">Min</span>
              </p>
              <p>
                <span className="time">{timeRemaining.seconds}</span>
                <span className="time2">Sec</span>
              </p>
            </div>
            <div className="shopnow">
              <a href="/">SHOP NOW</a>
            </div>
          </div>
        </div>
      </section>

      {/* Discount section end */}
      <Instagram />
      <Footer />
    </>
  );
};

export default Home;
