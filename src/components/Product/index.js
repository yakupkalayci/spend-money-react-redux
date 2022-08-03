import React from "react";

import "./styles.css";

function Product({img, title, price, amount}) {
  return (
    <div className="productContainer">
      <div className="productImg">
        <img src={img} />
      </div>
      <div className="productInfos">
        <h3>{title}</h3>
        <p>${price.toLocaleString()}</p>
      </div>
      <div className="productButtons">
        <button className="button sellBtn">Sell</button>
        <input name="amount" className="amountInfo" value={amount}/>
        <button className="button buyBtn">Buy</button>
      </div>
    </div>
  );
}

export default Product;
