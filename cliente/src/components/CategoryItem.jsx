import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryItem.css'


const CategoryItem = ({img, title, id,cat}) => {
  return (
    <figure className='containerCategoryItem'>
      <Link to={`/products/${cat}`}>
        <div className='itemImg'>
          <img src={img} alt={title} />
        </div>
        <figcaption className='itemTitle'>
          <h2 className='titlePar'>{title}</h2>
          <button className='btnShop'>SHOP NOW</button>
        </figcaption>
      </Link>
    </figure>
  )
}

export default CategoryItem