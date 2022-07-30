import React from "react";
import Card from "../UI/Card";
import { useDispatch } from "react-redux";
import { Cartactions } from "../../Store/CartSlice";
import "./ProductItem.css";

const ProductItem = (props) => {
  const { title, price, description, id } = props;

  const dispatch = useDispatch();

  return (
    <li className='item'>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className='price'>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className='actions'>
          <button
            onClick={() => {
              dispatch(Cartactions.addItem({ id, price, title }));
            }}
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
