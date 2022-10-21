import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import './Cart.css'

export const Cart = () => {
  return (
    <div className='containerCart'>
      <NavBar/>
      <div className='wrapperCart'>
        <h1 className='titleCart'>YOUR BAG</h1>
        <div className='top'>
          <button className='topButton'>CONTINUE SHOPPING</button>
          <div className='topTexts'>
            <span className='topText'>Shopping Bag (2)</span>
            <span className='topText'>Your Wishlist (0)</span>
          </div>
          <button className='topButton checkout'>CHECKOUT NOW</button>
        </div>
        <div className='bottom'>
            <div className='infoBottom'>
              <div className='productInfo'>
                <div className='productDetails'>
                  <img class="imgProduct" src="https://placeimg.com/400/400/animals" alt="" />
                  <div className='detailsProduct'>
                    <span className='productName'><b>Product:</b>Hakura</span>
                    <span className='productId'><b>ID:</b>54654564</span>
                    <div className='productColor'></div>
                    <span className='productSize'><b>Size:</b>37.5</span>
                  </div>
                </div>
                <div className='priceDetail'>
              <div className='productAmountContainer'>
                <div className='add'>+</div>
                <div className='productAmount'>2</div>
                <div className='remove'>-</div>
              </div>
              <span className='productPrice'>$30</span>
                </div>
              </div>
              <hr/>
              <div className='productInfo'>
                <div className='productDetails'>
                  <img class="imgProduct" src="https://placeimg.com/400/400/animals" alt="" />
                  <div className='detailsProduct'>
                    <span className='productName'><b>Product:</b>Hakura</span>
                    <span className='productId'><b>ID:</b>54654564</span>
                    <div className='productColor'></div>
                    <span className='productSize'><b>Size:</b>37.5</span>
                  </div>
                </div>
                <div className='priceDetail'>
              <div className='productAmountContainer'>
                <div className='add'>+</div>
                <div className='productAmount'>2</div>
                <div className='remove'>-</div>
              </div>
              <span className='productPrice'>$30</span>
                </div>
              </div>
              <hr/>
              <div className='productInfo'>
                <div className='productDetails'>
                  <img class="imgProduct" src="https://placeimg.com/400/400/animals" alt="" />
                  <div className='detailsProduct'>
                    <span className='productName'><b>Product:</b>Hakura</span>
                    <span className='productId'><b>ID:</b>54654564</span>
                    <div className='productColor'></div>
                    <span className='productSize'><b>Size:</b>37.5</span>
                  </div>
                </div>
                <div className='priceDetail'>
              <div className='productAmountContainer'>
                <div className='add'>+</div>
                <div className='productAmount'>2</div>
                <div className='remove'>-</div>
              </div>
              <span className='productPrice'>$30</span>
                </div>
              </div>
              
            </div>
            <div className='summaryBottom'>
              <h2 className='summaryTitle'>ORDER SUMMARY</h2>
              <div className='summaryItem'>
                <span className='summaryItemText'>Subtotal</span>
                <span className='summaryItemPrice'>$80</span>
              </div>
              <div className='summaryItem'>
                <span className='summaryItemText'>Estimated Shipping</span>
                <span className='summaryItemPrice'>$5.90</span>
              </div>
              <div className='summaryItem'>
                <span className='summaryItemText'>Shipping Discount</span>
                <span className='summaryItemPrice'>$-5.90</span>
              </div>
              <div className='summaryItem total'>
                <span className='summaryItemText'>Total</span>
                <span className='summaryItemPrice'>$80</span>
              </div>
              <button className='summaryBtn'>CHECKOUT NOW </button>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
