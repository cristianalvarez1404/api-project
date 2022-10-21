import React from 'react'
import { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import './Product.css'
import axios from 'axios'
import { publicRequest } from '../RequestMethods'

export const Product = ({el}) => {
  const location = useLocation()
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color,setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async() => {
      try {
        const res= await publicRequest.get("/products/find/" + id)
        setProduct(res.data);
      }catch(err){
        // console.log(err)
      }
    }
    getProduct()
  },[id])

  const handleQuantity = (type) => {
    if(type ==="dec"){
      quantity > 1 && setQuantity(quantity - 1)
    }else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    //update cart
    axios.post()
  }

  return (
    <div className='containerProductSingle'>
      <NavBar/>
      <div className='wrapperSingleProduct'>
        <div className='imgContainerSingleProduct'>
          <img src={product.img} alt="" />
        </div>
        <div className='infoContainerProduct'>
          <h1 className='titleSingleProduct'>{product.title}</h1>
          <p className='descSingleProduct'>{product.desc}</p>
          <span className='priceSingleProduct'>{`$${product.price}`}</span>
          <div className='filterContainerSingleProduct'>
            <div className='filterSingleProduct color'>    
              <span className='filterTextSingle'>Color:</span>
              {product.color 
                ? product.color.map((col,index) => {
                 return <div key={index} className='filterColor' style={{backgroundColor:col}} onClick={() => setColor(col)}></div>
                })
                : ""}
            </div>
            <div className='filterSingleProduct'>
              <span className='filterTextSingle'>Size:</span>
              <select name="color" className='filterSizeSingle' onChange={(e) => setSize(e.target.value) }>
                {product.size ? 
                  product.size.map((el,index) => {
                    return <option key={index} value={el}>{el}</option>
                  })
                :""}
              </select>
           </div>
         </div>
          <div className='addContainer'>
            <div className='amountContainer'>
              <div className='remove' onClick={(e) => handleQuantity("dec")}>-</div>
              <div className='amount'>{quantity}</div>
              <div className='add' onClick={(e) => handleQuantity("inc")}>+</div>
            </div>
            <button className='btnSingleProduct' onClick={handleClick}>Add to cart</button>
          </div>
        </div>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
