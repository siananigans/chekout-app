import { useState } from 'react';
import './Product.css'

function Product({name}) {
    const [count, setCount] = useState(0);

    function addProduct() {
      setCount(count + 1);
    }
  
    function subtractProduct() {
      if (count > 0) {
        setCount(count - 1);
      }
    }
  
    return (
      <div className="Product">
          <p>
            {name}
            <SubtractButton onClick={subtractProduct}/>
            {count}
            <AddButton onClick={addProduct}/>
          </p>
      </div>
    );
}

export default Product;


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