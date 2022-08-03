import React from 'react'
import { useSelector } from 'react-redux';

import "./styles.css";

function MoneyInfo() {
  const money = useSelector(state => state.money);

  return (
    <div className='moneyContainer'>${money}</div>
  )
}

export default MoneyInfo;