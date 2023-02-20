import React, { useState, useContext, useEffect } from 'react';
import Checkbox from './Checkbox';
import CartContext from './CartContext';
import Cart from './Cart';
import { FaBeer } from 'react-icons/fa';

import Modal from 'react-modal';

import { AiOutlineFilter } from "react-icons/ai";


import Card from './Card';
import './style.css';

export default function Comp(props) {

 


  const [innerWidth, setIn] = useState(window.innerWidth);

  // const style = {
  //   'background-color': getColor(innerWidth),
  // };

 
  const {cartLi,addCartItem} = useContext(CartContext);
  const[st,setSt] = useState('')
  const [products, setProducts] = useState([]);
  const [mp, setMp] = useState([]);
  const [cartList, setCartList] = useState([]);

  const [activeColor, setactiveColor] = useState('');
  const [activegender, setactiveGender] = useState('');
  const [activetype, setactiveType] = useState('');

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }


  useEffect(() => {
    window.addEventListener('resize', resize);
  }, []);

  function resize() {
    setIn(window.innerWidth);
  }


  const gender = [
    { id: 0, text: 'Men' },
    { id: 1, text: 'Women' },
  ];
  const price = [
    { id: 0, text: '250' },
    { id: 1, text: '251-449' },
    { id: 2, text: '450+' },
  ];
  const type = [
    { id: 0, text: 'Polo' },
    { id: 1, text: 'Hoodie' },
    { id: 2, text: 'Basic' },
  ];

  useEffect(() => {
    async function fetchData() {
      const options = { method: 'GET' };
      const k = await fetch(
        'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json',
        options
      );
      const f = await k.json();
      setProducts(f);
    }

    fetchData();
  }, []);

  // const j = products.filter(x=> indexof(x.color) === )
  //     console.log(j,'j')

  const unique = [...new Set(products.map((item) => item.color))];
  console.log(unique);
  // setMp(unique);

  const colorSet = (m) => {
    //console.log(activeColor)
    setMp(m);
  };
  console.log(mp, 'mp', mp.length);

  const onCart = (piece) => {
    console.log(123);
    //  console.log(cartList.push(piece))
    setCartList([...cartList, piece]);
    addCartItem(piece);
  };
 
  const handleChange=(e)=>{
    let u = e.target.value
    setSt(u)
    if(u == ''){
      setMp(products)
    }
    
  }

  const enterInput=(e)=>{
    if(e.key === 'Enter'){
      const k14 = products.filter((x) => x.name.toLowerCase() == st.toLowerCase());
      console.log(k14,"k14 a5")
      setMp(k14)
      //setMp(mp.push(...k14));
    }
    
  }
  const modC = () =>{
              return(
                <div>
                  <button onClick={closeModal}>close</button>

              <div>
              <p>color</p>

              {unique.map((x) => (
                <Checkbox
                  key={unique.indexOf(x)}
                  t={x}
                  products={products}
                  mp={mp}
                  colorSet={colorSet}
                  unique={unique}
                />
              ))}

              <p>gender</p>
              {gender.map((x) => (
                <Checkbox
                  key={x.id}
                  t={x.text}
                  products={products}
                  colorSet={colorSet}
                  unique={unique}
                />
              ))}

              <p>price</p>
              {price.map((x) => (
                <Checkbox
                  key={x.id}
                  t={x.text}
                  products={products}
                  colorSet={colorSet}
                  unique={unique}
                />
              ))}

              <p>type</p>
              {type.map((x) => (
                <Checkbox
                  key={x.id}
                  t={x.text}
                  products={products}
                  colorSet={colorSet}
                  unique={unique}
                />
              ))}
              </div>

          
          



                </div>
                
              )
            }

 

  console.log(cartList);
  console.log(mp,"mp")

  return (
    <div className="sep">
      <div className={innerWidth > 600?'mbd':'mbc'}>
        <h1>Trex store {innerWidth} </h1>
        {innerWidth <= 500?<p>hey</p>:<p>no</p>}
         <div className={innerWidth < 600?'ct':''}>
        <input type="search" value={st} placeholder='enter' onChange={handleChange} onKeyPress={enterInput}/>
        
        {/* <button onClick={openModal}> < AiOutlineFilter/> </button>
        <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
       
        onRequestClose={closeModal}
        
      >
         
        <button onClick={closeModal}>close</button>

        <div>
        <p>color</p>
        
        {unique.map((x) => (
          <Checkbox
            key={unique.indexOf(x)}
            t={x}
            products={products}
            mp={mp}
            colorSet={colorSet}
            unique={unique}
          />
        ))}

        <p>gender</p>
        {gender.map((x) => (
          <Checkbox
            key={x.id}
            t={x.text}
            products={products}
            colorSet={colorSet}
            unique={unique}
          />
        ))}

        <p>price</p>
        {price.map((x) => (
          <Checkbox
            key={x.id}
            t={x.text}
            products={products}
            colorSet={colorSet}
            unique={unique}
          />
        ))}

        <p>type</p>
        {type.map((x) => (
          <Checkbox
            key={x.id}
            t={x.text}
            products={products}
            colorSet={colorSet}
            unique={unique}
          />
        ))}
        </div>
        
         
      </Modal> */}
        

        
        {innerWidth > 600?<div>
        <p>color</p>
        
        {unique.map((x) => (
          <Checkbox
            key={unique.indexOf(x)}
            t={x}
            products={products}
            mp={mp}
            colorSet={colorSet}
            unique={unique}
          />
        ))}

        <p>gender</p>
        {gender.map((x) => (
          <Checkbox
            key={x.id}
            t={x.text}
            products={products}
            colorSet={colorSet}
            unique={unique}
          />
        ))}

        <p>price</p>
        {price.map((x) => (
          <Checkbox
            key={x.id}
            t={x.text}
            products={products}
            colorSet={colorSet}
            unique={unique}
          />
        ))}

        <p>type</p>
        {type.map((x) => (
          <Checkbox
            key={x.id}
            t={x.text}
            products={products}
            colorSet={colorSet}
            unique={unique}
          />
        ))}
        </div>:<div> <button onClick={ openModal}> < AiOutlineFilter/> </button>
        <Modal
        isOpen={modalIsOpen}
       
        onRequestClose={closeModal}
        
      >
        {modC()}
        </Modal>
        
        </div>}
        </div>

         

      </div>


      <ul className="st">
        {mp.length !== 0
          ? mp.map((piece) => (
              <Card piece={piece} key={piece.id} onCart={onCart} cartLi={cartLi}/>
            ))
          : products.map((piece) => (
              <Card piece={piece} key={piece.id} onCart={onCart} cartLi={cartLi} />
            ))}
      </ul>
      {/* // <Cart x={cartList} /> */}
    </div>
  );
}
