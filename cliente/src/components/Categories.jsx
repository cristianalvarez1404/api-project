import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import './Categories.css'

const Categories = () => {
  return (
    <>
    <div className='containerCategories'>
      {categories.map(el => <CategoryItem key={el.id} id={el.id} img={el.img} title={el.title} cat={el.cat}/>)}
    </div>
    </>
  )
}

export default Categories