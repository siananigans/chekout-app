import logo from './logo.svg';
import './App.css';
import Product from './Product';

const products = [
  { name: 'Cabbage', id: 1 },
  { name: 'Garlic', id: 2 },
  { name: 'Apple', id: 3 },
  { name: 'Carrot', id: 4},
];


export default function App() {
  const listItems = products.map(product =>
    <li
      key={product.id}
    >
      <Product name={product.name} />
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}