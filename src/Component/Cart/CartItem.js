import React from "react";
import { useDispatch } from "react-redux";
import { Cartactions } from "../../Store/CartSlice";

import "./CartItem.css";

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch();
  return (
    <li className="item">
      <header>
        <h3>{title}</h3>
        <div className="price">
          ${total.toFixed(2)}{" "}
          <span className="itemprice">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="details">
        <div className="quantity">
          x <span>{quantity}</span>
        </div>
        <div className="actions">
          <button
            onClick={() => {
              dispatch(
                Cartactions.addItem({ id: id, title: title, price: price })
              );
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch(Cartactions.removeItem(id));
            }}
          >
            -
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
