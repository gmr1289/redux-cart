import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UIactions } from "../../Store/UIslice";
import "./CartButton.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const badge = useSelector((state) => state.Cart.totalQuantity)

  return (
    <button
      className="button"
      onClick={() => {
        dispatch(UIactions.toggle());
      }}
    >
      <span>My Cart</span>
      <span className="badge">{badge}</span>
    </button>
  );
};

export default CartButton;
