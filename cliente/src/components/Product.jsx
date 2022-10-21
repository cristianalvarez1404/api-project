import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = ({el}) => {
  return (
    <div className='containerProduct'>
      <img className='imgProduct' src={el.img} alt={`product-${el.id}`} />
      <div className='iconsProduct'>
        <div className='icon shoppingIcon'>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div className='icon shoppingIcon'>
          <Link to={`/product/${el._id}`}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </Link>
        </div>
        <div className='icon favoriteIcon'>
          <i class="fa-regular fa-heart"></i>
        </div>
      </div>
    </div>
  )
}

export default Product