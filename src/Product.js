import { useState } from 'react';


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
      <div className="CartCount">
          <p>
            {name}
            <AddButton onClick={addProduct}/>
            {count}
            <SubtractButton onClick={subtractProduct}/>
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