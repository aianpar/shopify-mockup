import { Link } from "react-router-dom";
import filterIcon from "/src/assets/icons/filter.svg";
import confirmedIcon from "/src/assets/icons/confirm.svg";
import productImage1 from "/src/assets/images/img.png";
import productImage2 from "/src/assets/images/img2.png";
import "./Orders.scss"

export default function Orders() {
  return (
    <div className="order-page__container">
      <div className="order-page__header-wrapper">
        <h1 className="order-page__header">Orders</h1>
        <img className="order-page__filter" src={filterIcon} alt="filter" />
      </div>

      <div className="order-page__tab">
        <a className="order-page__tab-link order-page__tab-link--active">Confirmed</a>
        <a className="order-page__tab-link">Pending</a>
      </div>

      <div className="order__card">
        <div className="order__confirmation">
            <img src={confirmedIcon} alt="confirmed" className="order__confirmation-icon"/>
            <div className="order__confirmation-text-wrap">
                <p className="order__confirmation-text">Confirmed</p>
                <p className="order__confirmation-text">Updated Oct 17</p>
            </div>
        </div>
        <div className="order__image-wrapper">
            <img className="order__image" src={productImage1} alt="" />
            <img className="order__image" src={productImage2} alt="" />
        </div>
        <div className="order__info-wrap">
            <div className="order__info-text-wrap">
                <p className="order__info-text-b">2 items</p>
                <p className="order__info-text">Order #1017</p>
            </div>
            <div>
                <p className="order__info-text" >Marvin Gaye</p>
                <p className="order__info-text">1234, Yonge Street</p>
            </div>
        </div>
            <p className="order__info-text-b">$203.98</p>
        <Link to="/updated" className="btn__review-order">Review Order</Link>
      </div>
    </div>
  );
}
