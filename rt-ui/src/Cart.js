import React,{useState,useContext} from 'react'
import CartContext from './CartContext';
import CardCart from './CardCart'
 
 
 const Cart = ()=>{

 

  const { cartLi, addCartItem ,nom} = useContext(CartContext);

  const[price,setPrice] = useState(0)
  const[num,setNum] = useState(0)


  //{console.log(cartLi,'123po')}
  const itemNo=(value)=>{
    setNum(value)
    

  }

  const checkOut = () =>{
    let k = 0
    for(let i = 0;i<cartLi.length;i++)
    {
      k = k+cartLi[i].price*num
    }
    setPrice(k)


  }
  console.log(num,'quantity')

 
   

  return(
    <div className='ctc'>
        <ul className='ctl'>{ cartLi.map((piece) => (
              <CardCart piece={piece} key={piece.id}  cartLi={cartLi} itemNo={itemNo} />
            ))}</ul>

            {/* <p>total bill:{cartLi.map(x=>x.price)}</p> */}
     {/* //       {let total = shoppingCart.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue.qty * currentValue.price;
}, 0)} */}
      <button onClick={checkOut}>checkout</button>
      {price===0?'':<p>price :{price}</p>}
       
      
      </div>
  )
}
export default Cart