import React from 'react';
import Product from "../Product";
import { useSelector } from 'react-redux';

import "./styles.css";

function Products() {
  const products = useSelector(state => state.products.items);
  console.log(products);

  return (
    <div className='productsContainer'>
      {
        products.map(product => (
          <Product key={product.id} img={product.img} title={product.name} price={product.price} amount={product.amount}/>
        ))
      }
    </div>
  )
}

export default Products;