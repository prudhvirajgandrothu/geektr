import React from 'react'

const CartContext = React.createContext({
  cartLi: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  
})

export default CartContext

// const CartProvider = (props) =>{


//   return(
//     <CartContext.Provider 
//         value={{ 
//                     cart, 
//                     setCart,
//                     addToCart,
//                     deleteCartById,
//                     deleteCart, 
//                }}
//     >
//         {props.children}
//     </CartContext.Provider>
// )
// }
