import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/messages")
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h1>{product.name}</h1> - <h3>{product.message}</h3> <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
