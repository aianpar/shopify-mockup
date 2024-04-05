import { Link } from "react-router-dom";
import filterIcon from "/src/assets/icons/filter.svg"
import confirmedIcon from "/src/assets/icons/confirm.svg"
import "./Orders.scss"

export default function Orders() {
  return (
    <div className="order-page__container">
      <div className="order-page__header-wrapper">
        <h1 className="order-page__header">Orders</h1>
        <img className="order-page__filter" src={filterIcon} alt="filter" />
      </div>

      <div className="order-page__tab">
        <a className="order-page__tab-link">Confirmed</a>
        <a className="order-page__tab-link order__tab-link--active">Pending</a>
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
            <img className="order__image" src="" alt="" />
            <img className="order__image" src="" alt="" />
        </div>
        <div>
            <div>
                <p>2 items</p>
                <p>Order #1017</p>
            </div>
            <div>
                <p>Marvin Gaye</p>
                <p>1234, Yonge Street</p>
            </div>
        </div>
            <p>$203.98</p>
        <button>Review Order</button>
      </div>
      <Link to="/updated">/updated</Link>
    </div>
  );
}
