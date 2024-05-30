// React Tools
import React from "react";
import { useParams } from "react-router-dom";

// Components
import Header from "../../components/Header";
import Instagram from "../../components/Instagram";
import Footer from "../../components/Footer";
import data from "../../Pages/Blog/data";

// CSS
import "./style.css";

const BlogDetail = () => {
  const { postId } = useParams();
  const blogPost = data.find((post) => post.id === parseInt(postId));

  return (
    <>
      <Header />
      <div className="container-blogDetail d-flex  justify-content-between">
        <div className="col-8">
          <div className="blog-detail container">
            <div className="bd-img">
              <img
                src={blogPost.img}
                alt={blogPost.title}
                className="blog-detail-image"
              />
            </div>
            <div className="bd-title">
              <span>Street Style</span>
              <h2>{blogPost.title}</h2>
            </div>
            <div className="aut-publish">
              <p className="author">by Same Timahe</p>
              <p className="published-date"> Sep 17, 2023</p>
            </div>
            <p>{blogPost.content}</p>
          </div>
        </div>
        <div className="col-4">
          <div className=".">
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
            <div className="feauture-posts">
              <div className="feauture-heading">
                <h3>Feature Posts</h3>
              </div>
              <div className="feauture-content">
                <div className="fpost d-flex justify-content-between">
                  <img
                    src="https://preview.colorlib.com/theme/ashion/img/blog/sidebar/fp-1.jpg"
                    alt=""
                  />
                  <div className="fc-p">
                    <p className="fc-pheading">
                      Amf Cannes Red Carpet Celebrities Kend...
                    </p>
                    <p className="fc-pcontent">Seb 17, 2019</p>
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
                    <p className="fc-pcontent">Seb 17, 2019</p>
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
                    <p className="fc-pcontent">Seb 17, 2019</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tags-cloud">
              <div className="tc-heading">
                <h3>Tags Cloud</h3>
              </div>
              <div className="tc-buttons">
                <button>Fashion</button>
                <button>Street Style</button>
                <button>Diversity</button>
                <button>Beauty</button>
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

export default BlogDetail;
