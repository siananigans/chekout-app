import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


export default function App() {
  const [count, setCount] = useState(0)

  function addProduct() {
    setCount(count + 1);
  }

  function subtractProduct() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="CartCount">
        <p>
          <AddButton onClick={addProduct}/>
          {count}
          <SubtractButton onClick={subtractProduct}/>
        </p>
    </div>
  );
}


function AddButton({onClick}) {
  return (
    <button onClick={onClick}>
      +
    </button>
  )
}

function SubtractButton({onClick}) {
  return (
    <button onClick={onClick}>
      -
    </button>
  )
}