import React,{useContext,useState} from 'react'
import Cart from './Cart'
import CartContext from './CartContext'

import './style.css'
const Card = (props) => {
  const [opv,setopv] = useState(1)

  function handleChange(e){
    setopv(e.target.value)

  }
   
  const {piece ,onCart,cartLi}=props
  const{color,currency,gender,id,imageURL,name,price,quantity,type} = piece
  
  const checkIt=()=>{
    let g = []
    const isFound = cartLi.some(element => {
      if (element.id === piece.id) {
        console.log(true,'baby')
        g.push(true)
         
        
      }  g.push(false)
      
      });
      if(g.includes(true)){
        return(true)
      }
     
  }
  
  return(
    <li className="link-item" >
       
      <div className="card-content">
        <img src={imageURL} className="shirt"/>

        <div className='cmb'>
      <h4>{name}  </h4>
      <p>{gender} </p>
      <p> {price}</p>
      {checkIt()?<button className='bc' > add to cart</button>: <button className='bc' onClick={()=>onCart(piece)} > add to cart </button> }
     {/* <button onClick={()=>onCart(piece)}> add to cart{piece.id}</button>  */}
     {/* {cartLi.includes(piece)?<select className='drop' value={opv}  onChange={handleChange} >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        </select>: <button onClick={()=>onCart(piece,opv)}> add to cart{piece.id}</button> }  */}
      </div>
      </div>
     

     </li> 
  )

}
export default Card