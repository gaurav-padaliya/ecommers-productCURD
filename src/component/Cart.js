import React from 'react'
import './all.css'
const Cart = ({el}) => {
  return (
    <div className='singlecart'>
        <img className = "image" src={`${el.image}`} alt="no" />
        <div className="itemName">{el.category}</div>
        <div className="price">{el.price}$</div>
    </div>
  )
}

export default Cart