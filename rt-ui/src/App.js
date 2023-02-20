import React, { useState, useContext, useEffect } from 'react';
import Checkbox from './Checkbox';
import { Link, Routes,Route,  BrowserRouter as Router } from 'react-router-dom';

import Comp from './Comp';
import CartContext from './CartContext';
import Cart from './Cart';

import Card from './Card';

 import './style.css'

export default function App(props) {
  const [cartLi, setCartLi] = useState([]);
   

  const addCartItem = (piece,opv) => {
    console.log('adidng cart');
    if(!cartLi.includes(piece)){
      setCartLi([...cartLi, piece])
      console.log(cartLi[0]===cartLi[2],'judgement')
    } 
    
    ;
    
  };

  console.log(cartLi, 'cliy');

  return (
    <CartContext.Provider
      value={{
        cartLi,
        addCartItem: addCartItem,
        
      }}
    >
    <Router>

      <header>
      <Link to="/"><button>home</button></Link>
      <Link to="/cart"><button>cart</button></Link></header> 
      <main>
        <Routes>
          <Route exact path="/"   element={<Comp/>}/>
          <Route exact path="/cart"   element={<Cart/>}/>
        </Routes>
      </main>
      
  </Router>
      
 </CartContext.Provider>
  );
}
