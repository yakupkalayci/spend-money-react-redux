import React from 'react'
import { useSelector } from 'react-redux';

import "./styles.css";

function MoneyInfo() {
  const money = useSelector(state => state.products.money);

  return (
    <div className='moneyContainer'>${money.toLocaleString()}</div>
  )
}

export default MoneyInfo;