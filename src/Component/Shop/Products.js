import React from "react";
import ProductItem from "./ProductItem";
import "./Products.css";

const prod = [
  { id: 1, title: "Book 1", price: 10, description: "Book on Number 1" },
  { id: 2, title: "Book 2", price: 20, description: "Book on Number 2" },
  { id: 3, title: "Book 3", price: 30, description: "Book on Number 3" },
];

const Products = (props) => {
  return (
    <section className="products">
      <h2>Buy your favorite products</h2>
      <ul>
        {prod.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            price={product.price}
            title={product.title}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
