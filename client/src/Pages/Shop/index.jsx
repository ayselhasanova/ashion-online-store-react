// React tools
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToFav } from "../../redux/actions/favActions";
import { addToCart } from "../../redux/actions/cartActions";

// Css
import "./style.css";
import "../../assets/css/reset.css";

//pages
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Instagram from "../../components/Instagram";

// Material UI
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

const url = "http://localhost:3000/api/products/";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
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

  // Filter products by search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort products
  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    if (sortBy === "priceAsc") {
      return a.price - b.price;
    } else if (sortBy === "priceDesc") {
      return b.price - a.price;
    }
    return 0;
  });

  // Calculate pagination
  const indexOfLastProduct = currentPage * postsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(sortedProducts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Rendering Stars
  const renderStarIcons = (quantity) => {
    return Array.from({ length: quantity }, (_, index) => (
      <span
        key={index}
        className="pi pi-star-fill"
        style={{ color: "coral" }}
      ></span>
    ));
  };

  return (
    <>
      <Header />
      <section id="shop">
        <div className="container-shop">
          <div className="col-2">
            <div className="categories">
              <h3>Categories</h3>
              <MDBAccordion flush>
                <MDBAccordionItem collapseId={1} headerTitle="Woman">
                  <ul>
                    <li>Coats</li>
                    <li>Jackets</li>
                    <li>Dresses</li>
                    <li>Shirts</li>
                    <li>T-shirts</li>
                    <li>Jeans</li>
                  </ul>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle="Men">
                  <ul>
                    <li>Coats</li>
                    <li>Jackets</li>
                    <li>Dresses</li>
                    <li>Shirts</li>
                    <li>T-shirts</li>
                    <li>Jeans</li>
                  </ul>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={3} headerTitle="Kids">
                  <ul>
                    <li>Coats</li>
                    <li>Jackets</li>
                    <li>Dresses</li>
                    <li>Shirts</li>
                    <li>T-shirts</li>
                    <li>Jeans</li>
                  </ul>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={4} headerTitle="Accessories">
                  <ul>
                    <li>Coats</li>
                    <li>Jackets</li>
                    <li>Dresses</li>
                    <li>Shirts</li>
                    <li>T-shirts</li>
                    <li>Jeans</li>
                  </ul>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={5} headerTitle="Cosmetics">
                  <ul>
                    <li>Coats</li>
                    <li>Jackets</li>
                    <li>Dresses</li>
                    <li>Shirts</li>
                    <li>T-shirts</li>
                    <li>Jeans</li>
                  </ul>
                </MDBAccordionItem>
              </MDBAccordion>
            </div>
            <div className="by-price">
              <h3>Search Product</h3>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <h3>Sort by price</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="priceAsc">Low to High</option>
                <option value="priceDesc">High to Low</option>
              </select>
            </div>
            <div className="by-color">
              <h3>Shop by color</h3>
              <form action="">
                <div className="checkboxes d-flex">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="xss"
                    name="black"
                  />
                  <label htmlFor="xss">BLack</label>
                </div>
                <div className="checkboxes d-flex">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="xss"
                    name="white"
                  />
                  <label htmlFor="xss">White</label>
                </div>
                <div className="checkboxes d-flex">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="xss"
                    name="red"
                  />
                  <label htmlFor="xss">Red</label>
                </div>
                <div className="checkboxes d-flex">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="xss"
                    name="grey"
                  />
                  <label htmlFor="xss">Grey</label>
                </div>
                <div className="checkboxes d-flex">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="xss"
                    name="blue"
                  />
                  <label htmlFor="xss">Blue</label>
                </div>
                <div className="checkboxes d-flex">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="xss"
                    name="beige"
                  />
                  <label htmlFor="xss">Beige</label>
                </div>
                <div className="checkboxes d-flex">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="xss"
                    name="Yellow"
                  />
                  <label htmlFor="xss">Green</label>
                </div>
              </form>
            </div>
          </div>
          <div className="col-10">
            <div className="shop-product">
            <ul className="shop-product-list">
                {currentProducts.map((product) => (
                  <li key={product._id} className="col-4 shop-product-item">
                    <div className="shop-product-img">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />
                      <div className="overlay-shop-product d-flex justify-content-center align-items-center">
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
                    <div className="product-content">
                      <p>{product.name}</p>
                      {renderStarIcons(product.quantity)}
                      <p>{product.price}$</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="next-previous-btns d-flex justify-content-center">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            <i className="pi pi-chevron-left"></i>
              </button>
              <span>
                 {currentPage} of {Math.ceil(products.length / postsPerPage)}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === Math.ceil(products.length / postsPerPage)}
              >
                <i className="pi pi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Instagram />
      <Footer />
    </>
  );
};

export default Shop;
