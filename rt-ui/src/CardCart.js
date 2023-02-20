import React, { useState } from 'react'
 
import './style.css'
const CardCart = (props) => {

  const[value,setValue] = useState(1)
  const {piece,cartLi,itemNo}=props
  const{color,currency,gender,id,imageURL,name,price,quantity,type} = piece

  const handleChange=(e)=>{
    setValue(e.target.value)
    
  }
   

  return(
    <li className="sul2" >
       
       
        <img src={imageURL} className=""/>

        <div>  <h4>{name}  </h4>
      <p>{gender} </p>
      <p> {price}</p></div>
     
     
     
      
      <select className='drop' value={value} onChange={handleChange}   >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        </select>
      <div>
      <button  > Remove</button>  
      </div>
      {itemNo(value)}
     

     </li> 
  )

}
export default CardCart