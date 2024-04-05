import { Link } from "react-router-dom";
import backIcon from "/src/assets/icons/back-arrow.svg";
import productImage1 from "/src/assets/images/img.png";
import productImage2 from "/src/assets/images/img2.png";
import minusIcon from "../../assets/icons/minus.svg";
import plusIcon from "../../assets/icons/plus.svg";
import deleteIcon from "../../assets/icons/large.svg";
import "./EditOrder.scss";

function myFunction() {
    alert("Order Changes Confirmed");
  }

export default function EditOrder() {

  return (
    
    <div className="order-page__container">
      <div className="order-page__header-wrapper">
        <Link to="/">
          <img className="order-page__filter" src={backIcon} alt="filter" />
        </Link>
        <div className="order-page__header--container">
          <h1 className="order-page__header">Order #1017</h1>
          <p className="order-page__detail">Confirmed October 17 2024</p>
        </div>
      </div>

      <div className="order__card">
        <div className="oder-summary__title--container">
          <h2 className="order-summary__title">Order Summary</h2>
        </div>
        <div className="order-product-card--container">
          <div className="order-product-card">
            <img className="product-img" src={productImage1} alt="shirt" />
            <div className="product__order--container">
              <p className="product__order-title">Supreme Sweater</p>
              <p className="product__order-size">Size M</p>
              <p className="product__order-price">$141.98</p>
              <div className="product__order-quantity--container">
                <img
                  src={minusIcon}
                  className="order-minus"
                  alt="minus button"
                />
                <p className="product__order-quantity--container">1</p>
                <img src={plusIcon} className="order-plus" alt="plus button" />
              </div>
            </div>
            <img src={deleteIcon} alt="delete icon" />
          </div>
          <div className="order-product-card">
            <img className="product-img" src={productImage2} alt="shirt" />
            <div className="product__order--container">
              <p className="product__order-title">Supreme Sweater</p>
              <p className="product__order-size">Size M</p>
              <p className="product__order-price">$80.99</p>
              <div className="product__order-quantity--container">
                <img
                  src={minusIcon}
                  className="order-minus"
                  alt="minus button"
                />
                <p className="product__order-quantity--container">1</p>
                <img src={plusIcon} className="order-plus" alt="plus button" />
              </div>
            </div>
            <img src={deleteIcon} alt="delete icon" />
          </div>
        </div>
        <button onClick={myFunction} className="btn__review-order">
          Confirm Changes
        </button>
      </div>
    </div>
  );
}
