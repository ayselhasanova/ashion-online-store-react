import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
import Header from "../../components/Header";
import Instagram from "../../components/Instagram";
import Footer from "../../components/Footer";

const Blog = () => {
  const [hoveredPost, setHoveredPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Header />
      <div className="container-blog d-flex justify-content-around">
        <div className="col-8">
          <div className="posts d-flex flex-wrap">
            {currentPosts.map((blogPost) => (
              <div
                key={blogPost.id}
                className="col-6 post"
                onMouseEnter={() => setHoveredPost(blogPost.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <img
                  src={blogPost.img}
                  alt={blogPost.title}
                  className="blog-image"
                />
                <div className="post-content">
                <h6>{blogPost.title}</h6>
                <div className="aut-publish">
                <p className="author">by Same Timahe</p>
                <p className="published-date"> Sep 17, 2023</p>
                </div>
                </div>
                {hoveredPost === blogPost.id && (
                  <div className="overlay">
                    <p>
                      <Link to={`/blogdetail/${blogPost.id}`} className="readmore">Read more...</Link>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="next-previous-btns d-flex">
            <div className="previous-btn">
              {currentPage > 1 && (
                <button onClick={handlePreviousPage}><i className="pi pi-chevron-left"></i></button>
              )}
            </div>
            <div className="next-btn">
              {data.length > indexOfLastPost && (
                <button onClick={handleNextPage}><i className="pi pi-chevron-right"></i></button>
              )}
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="categories">
            <div className="categories-heading">
              <h3>Categories</h3>
            </div>
            <div className="categories-content">
              <ul className="categories-list" typeof="none">
                <li>
                  <a href="./" className="d-flex justify-content-between">
                    All <span>(250)</span>
                  </a>
                </li>
                <li>
                  <a href="./" className="d-flex justify-content-between">
                    Fashion week <span>(80)</span>
                  </a>
                </li>
                <li>
                  <a href="./" className="d-flex justify-content-between">
                    Street style <span>(95)</span>
                  </a>
                </li>
                <li>
                  <a href="./" className="d-flex justify-content-between">
                    Life style <span>(37)</span>
                  </a>
                </li>
                <li>
                  <a href="./" className="d-flex justify-content-between">
                    Beauty <span>(42)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="feature-posts">
            <div className="feature-heading">
              <h3>Feature Posts</h3>
            </div>
            <div className="feature-content">
              <div className="fpost d-flex justify-content-between">
                <img
                  src="https://preview.colorlib.com/theme/ashion/img/blog/sidebar/fp-1.jpg"
                  alt=""
                />
                <div className="fc-p">
                  <p className="fc-pheading">
                    Amf Cannes Red Carpet Celebrities Kend...
                  </p>
                  <p className="fc-pcontent">Sep 17, 2019</p>
                </div>
              </div>
              <div className="fpost d-flex justify-content-between">
                <img
                  src="https://preview.colorlib.com/theme/ashion/img/blog/sidebar/fp-2.jpg"
                  alt=""
                />
                <div className="fc-p">
                  <p className="fc-pheading">
                    Amf Cannes Red Carpet Celebrities Kend...
                  </p>
                  <p className="fc-pcontent">Sep 17, 2019</p>
                </div>
              </div>
              <div className="fpost d-flex justify-content-between">
                <img
                  src="https://preview.colorlib.com/theme/ashion/img/blog/sidebar/fp-3.jpg"
                  alt=""
                />
                <div className="fc-p">
                  <p className="fc-pheading">
                    Amf Cannes Red Carpet Celebrities Kend...
                  </p>
                  <p className="fc-pcontent">Sep 17, 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Instagram />
      <Footer />
    </>
  );
};

export default Blog;
