import { Link } from "react-router-dom";
import filterIcon from "/src/assets/icons/filter.svg";
import confirmedIcon from "/src/assets/icons/confirm.svg";
import productImage1 from "/src/assets/images/img.png";
import productImage2 from "/src/assets/images/img2.png";
import "./EditOrder.scss"

export default function Orders() {
  return (
    <div className="editorder-page__container">
      <div className="editorder-page__header-wrapper">
        <h1 className="editorder-page__header">Order #1017</h1>
        <p className="editorder-page__subheader">Confirmed Oct 17 2024</p>
      </div>

      <div className="editorder__card">
        <h2>Order Summary</h2>
        <div className="item__card">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <p>Supreme Kermit</p>
            </div>
        </div>
        <Link to="/updated" className="btn__review-order">Review Order</Link>
      </div>
    </div>
  );
}
