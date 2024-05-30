import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFav } from "../../redux/actions/favActions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Instagram from "../../components/Instagram";

// Css
import "./style.css";

const FavList = () => {
  const favItems = useSelector((state) => state.favorites.favs);
  const dispatch = useDispatch();

  const handleRemoveFromFav = (productId) => {
    dispatch(removeFromFav(productId));
  };

  return (
    <>
      <Header />
      <div className="fav-container">
        <h2>Your Favorite Products</h2>
        <table className="fav-table">
          <tbody>

          {favItems.map((item) => (
            <tr key={item._id}>
              <td>
                <div className="fav-product d-flex align-items-center">
                <img src={item.image} alt="product" className="fav-img" />
              {item.name}  
                </div>
              </td>
              <td>
              {item.price}$
              </td>
              <td>
              <button onClick={() => handleRemoveFromFav(item._id)}>
              <i className="pi pi-times"></i>
              </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <Instagram />
      <Footer />
    </>
  );
};


export default FavList;
