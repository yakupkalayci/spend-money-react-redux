import Header from './components/Header';
import MoneyInfo from './components/MoneyInfo';
import Products from './components/Products';
import Product from './components/Product';
import Receipt from './components/Receipt';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MoneyInfo />
      <Products />
      <Product />
      <Receipt />
    </div>
  );
}

export default App;
