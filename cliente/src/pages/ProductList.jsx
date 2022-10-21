import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import './ProductList.css'

export const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]:value
    })
  }
  return (
    <div className='containerProductList'>
      <NavBar/>
      <h1 className='titleProductList'>Dresses</h1>
      <div className='filterContainer'>
        <div className='filter'>
          <span className='filterText'>Filter products:</span>
          <select className='select-item' name="color" onChange={handleFilters}>
            <option value="" disabled>color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
          </select>
          <select className='select-item' name="size" onChange={handleFilters}>
            <option value="" disabled>Sizes</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
          </select>
        </div>
        <div className='filter'>
          <span className='filterText'>Sort products:</span>
          <select className='select-item' name="newest" onChange={(e) => setSort(e.target.value)}>
            <option value="newest" disabled>Newest</option>
            <option value="asc">price-asc</option>
            <option value="desc">price-desc</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
