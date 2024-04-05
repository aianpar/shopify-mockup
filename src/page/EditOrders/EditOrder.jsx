import { Link } from "react-router-dom";
import "./EditOrder.scss";
import image1small from "/src/assets/images/img-small.png"


export default function Orders() {
  return (
    <div className="editorder-page__container">
      <div className="editorder-page__header-wrapper">
        <img src="" alt="" />
        <h1 className="editorder-page__header">Order #1017</h1>
        <p className="editorder-page__subheader">Confirmed Oct 17 2024</p>
      </div>

      <div className="editorder__card">
        <h2>Order Summary</h2>
        <div className="item__card">
            <div>
              <img src={image1small} alt="" />
            </div>
            <div>
              <p>Supreme Kermit</p>
              <p>Size M</p>
        </div>
        </div>
        <Link to="/updated" className="btn__review-order">Review Order</Link>
      </div>
    </div>
  );
}
