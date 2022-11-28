import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import CountUp from 'react-countup';

import "./styles.css";

function MoneyInfo() {
  const initMoney = useSelector(state => state.products.initMoney);
  const end = useSelector(state => state.products.end);
  const price = useSelector(state => state.products.price);

  const [duration, setDuration] = useState(3);

  useEffect(() => {
    if(price < 50) {
      setDuration(0.05);
    }
    else if (price > 50 && price < 500) {
      setDuration(1);
    }
    else if(price > 500 && price < 2500) {
      setDuration(3);
    }
    else {
      setDuration(5);
    }
  }, [price]);

  return (
    <div className='moneyContainer'>
      <CountUp 
        start={initMoney} 
        end={end} 
        duration={duration}
        prefix="$"
        separator="."
      />
    </div>
  )
}

export default MoneyInfo;