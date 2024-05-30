import React from "react";
import { Link } from "react-router-dom";
// CSS
import "./style.css";

const Error = () => {
  return (
    <section id="bg-img">
      <div className="d-flex align-items-center">
        <div className="content">
          <h1>Oops! Something went wrong...</h1>
          <h2><span>404 ERROR</span>PAGE NOT FOUND</h2>
          <Link className="link" to={"/"}>
            {" "}
            Back to main page{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
