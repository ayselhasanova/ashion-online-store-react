import React from "react";
import "./style.css";
import "../../assets/css/reset.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Instagram from "../../components/Instagram";

const Contact = () => {
  return (
    <>
      <Header />
      <section id="contact">
        <div className="container-contact">
          <div className="row">
            <div className="col-6 contact">
              <div className="contact-info">
                <h2> Contact info</h2>
                <h4>
                  <i className="fa-solid fa-location-dot" /> Adress{" "}
                </h4>
                <p>
                  160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161
                </p>
                <h4>
                  <i className="fa-solid fa-phone" /> Phone{" "}
                </h4>
                <p>125-711-811125-668-886</p>
                <h4>
                  <i className="fa-solid fa-headphones" /> Suport
                </h4>
                <p>Support.photography@gmail.com</p>
              </div>
              <div className="send-message">
                <h2>Send message</h2>
                <form action="">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="text" placeholder="Website" />
                  <input type="text" placeholder="Message" />
                  <input
                    type="submit"
                    className="submit-btn-send"
                    placeholder="Send message"
                  />
                </form>
              </div>
            </div>
            <div className="col-6">
              <div>
                <iframe
                  height={680}
                  width="100%"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Instagram />
      <Footer />
    </>
  );
};

export default Contact;
