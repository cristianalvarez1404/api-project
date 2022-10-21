import React, { useState, useEffect } from 'react'
import './Products.css'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'

const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  let styleH2 = {
    textAlign:"center",
    border:"thin solid #ccc",
    padding:"2rem",
    color:"#555",
    fontSize:"3rem"
  }

  return (
    <>
        <h2 style={styleH2}>Popular Products</h2>
      <div className='containerProducts'>
        {cat 
          ? filteredProducts.map(el => <Product key={el.id} el={el}/>) 
          : products.slice(0,8).map(el => <Product key={el.id} el={el}/>)}
      </div>
    </>
  )
}

export default Products