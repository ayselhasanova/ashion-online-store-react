import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseCounter,
  decreaseCounter,
} from "../../redux/actions/cartActions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Instagram from "../../components/Instagram";

// Css
import "./style.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseCounter = (productId) => {
    dispatch(increaseCounter(productId));
  };

  const handleDecreaseCounter = (productId) => {
    dispatch(decreaseCounter(productId));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.counter;
  }, 0);

  return (
    <>
      <Header />
      <div className="cart-container">
        <h2 className="cart-heading">Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty. Add something to your cart.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                    <img src={item.image} alt="product" className="cart-img" />
                    {item.name}
                    </div>
                    </td>
                  <td>{item.price} $</td>
                  <td>
                    <div className="cart-counter">
                    <button onClick={() => handleIncreaseCounter(item._id)}>
                      <i className="pi pi-plus"></i>
                    </button>
                    <span>{item.counter}</span>
                    <button onClick={() => handleDecreaseCounter(item._id)}>
                      <i className="pi pi-minus"></i>
                    </button>
                    </div>
                  </td>
                  <td>{item.price * item.counter} $</td>
                  <td>
                    <button onClick={() => handleRemoveFromCart(item._id)}>
                      <i className="pi pi-times"></i>
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="total">
                <td className="total-price">Total Price:</td>
                <td></td>
                <td></td>
                <td>{totalPrice} $</td>
                <td>
                  <button type="submit" className="cart-submit">
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <Instagram />
      <Footer />
    </>
  );
};

export default Cart;
