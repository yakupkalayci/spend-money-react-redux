import React from "react";

import "./styles.css";

function Product() {
  return (
    <div className="productContainer">
      <div className="productImg">
        <img src="https://neal.fun/spend/images/big-mac.jpg" />
      </div>
      <div className="productInfos">
        <h3>Big Mac</h3>
        <p>$2</p>
      </div>
      <div className="productButtons">
        <button className="button sellBtn">Sell</button>
        <input name="amount" className="amountInfo" />
        <button className="button buyBtn">Buy</button>
      </div>
    </div>
  );
}

export default Product;
