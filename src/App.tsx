import { useState } from 'react'
import { ProductList } from './components/ProductList';
import React from 'react';
import Title from './components/Title';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div>
        <Title />
      </div>
      <ProductList />
    </div>
  );
}

export default App;
