import React from "react";
import Card from "../UI/Card";
import { useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.Cart.Items);

  return (
    <Card className="cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
