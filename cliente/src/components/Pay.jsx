import React, { useState, useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import imgCompany from '../assets/Polo-1.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const KEY = "pk_test_51Lst9qBeFhhErUokrmSYdScNY9c1cTip2PrPhuzQ2ji19XUlIuHdPK5iuVLM7unEBMegsFU23wWfIFWFWlLzFa9r009lvuYZde"


const styleBtn = {
  border:"none",
  with:120,
  borderRadious:5,
  padding:"20px",
  backgroundColor:"black",
  color:"white",
  fontWeight:"600",
  cursor:"pointer",
}

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate()

  const onToken = (token) => {
    setStripeToken(token)
  };

  useEffect(() => {
    const makeRequest = async() => {
      try {
        const res = axios.post('http://localhost:5000/api/checkout/payment',{
          tokenId:stripeToken.id,
          amount:2000,
        })
        console.log(res.data)
        navigate('/success')
      }catch(err){
        console.log(err)
      }
    }
    stripeToken && makeRequest()
  },[stripeToken])

  return (
    <div>
      {stripeToken ? (<span>Proccessing.Please wait...</span>) :
      <StripeCheckout
        name='UNISTYLE'
        image={imgCompany}
        billingAddress
        shippingAddress
        description='Your total is $20'
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button style={styleBtn}>Pay now</button>
      </StripeCheckout>
     }
    </div>
  )
}

export default Pay