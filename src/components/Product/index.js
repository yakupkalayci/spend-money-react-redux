import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAmount, calcMoney, increase, decrease } from "../../redux/products/productsSlice";

import "./styles.css";

function Product(props) {
  // Destruct Props
  const {id, image, title, price, amount} = props;
  
  const dispatch = useDispatch();

  const [amountInput, setAmountInput] = useState(+amount);

  const onChange = (e) => {
    setAmountInput(e.target.value);
  }

  const onBlur = () => {
    dispatch(setAmount({id, amount: amountInput}));
    dispatch(calcMoney());
  }

  const handleIncrease = () => {
    setAmountInput(amount => amount+1);
    dispatch(increase({id}));
  }

  const handleDecrease = () => {
    if(amountInput > 0) {
      setAmountInput(amount => amount-1);
      dispatch(decrease({id}));
    }
  }

  return (
    <div className="productContainer">
      <div className="productImg">
        <img src={image} alt={title}/>
      </div>
      <div className="productInfos">
        <h3>{title}</h3>
        <p>${price.toLocaleString()}</p>
      </div>
      <div className="productButtons">
        <button className="button sellBtn" onClick={() => handleDecrease()}>Sell</button>
        <input name="amount" className="amountInfo" value={amountInput} onChange={(e) => onChange(e)} onBlur={onBlur} />
        <button className="button buyBtn" onClick={() => handleIncrease()}>Buy</button>
      </div>
    </div>
  );
}

export default Product;
