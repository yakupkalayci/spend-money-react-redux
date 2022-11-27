import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import Product from "../Product";
import "./styles.css";

function Products() {

  const products = useSelector(state => state.products.products);

  useEffect(() => {
    console.log(products);
  }, [products]);
  
  return (
    <div className='productsContainer'>
      {
        products.map(product => (
          <Product key={product.id} id={product.id} image={product.img} title={product.name} price={product.price} amount={product.amount}/>
        ))
      }
    </div>
  )
}

export default Products;