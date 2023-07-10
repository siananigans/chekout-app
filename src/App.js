import logo from './logo.svg';
import './App.css';
import Product from './Product';

const products = [
  { name: 'Cabbage', price: 1 },
  { name: 'Garlic', price: 2 },
  { name: 'Apple', price: 3 },
  { name: 'Carrot', price: 4},
];


export default function App() {
  function displayCheckout() {
    return (
      alert(listItems)
    )
  }
  const listItems = products.map(product =>
    <li
      key={product.name}
    >
      <Product name={product.name} />
    </li>
  );
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Fruit & Veg shop</h1>
      </header>
      <div className='ProductList'>
        <ul>{listItems}</ul>
        <CheckoutButton onlcick={displayCheckout}/>
      </div>
    </div>
  );
}


function CheckoutButton({onlcick}) {
  return (
    <button onClick={onlcick}>
      Add to cart & checkout
    </button>
  )
}