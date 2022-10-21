import React from 'react'
import './Footer.css'
import amercian from '../assets/american.png'
import master from '../assets/master.png'
import paypla from '../assets/paypal.png'
import visa from '../assets/visa.png'


const Footer = () => {
  return (
    <div className='containerFooter'>
      <div className='leftFooter'>
        <h1 className='titleFooter'>PC FAST</h1>
        <p className='descriptionFooter'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut sunt velit quasi adipisci, suscipit quisquam corrupti expedita id doloribus. Ab cumque voluptates placeat reiciendis provident temporibus a esse fugit?
        </p>
        <div className='socialContainer'>
          <div className='socialIcon' style={{backgroundColor:"#4267B2"}}>
            <i class="fa-brands fa-facebook"></i>
          </div>
          <div className='socialIcon' style={{backgroundColor:"#00acee "}}>
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div className='socialIcon' style={{backgroundColor:"#E60023"}}>
            <i class="fa-brands fa-pinterest"></i>
          </div>
          <div className='socialIcon' style={{backgroundColor:"#833AB4"}}>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className='centerFooter'>
        <h3 className='titleFooter'>useFul Links</h3>
        <ul className='listFooter'>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accesories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>WishList</li>
          <li>WishList</li>
          <li>Terms</li>
        </ul>

      </div>
      <div className='rightFooter'>
        <h2 className='titleFooter'>Contact</h2>
        <div>
          <div className='contactItem'>
            <i class="iconContact fa-solid fa-location-dot"></i>
            <p className='infoContact'>622 Dixie Path, South</p>
          </div>
          <div className='contactItem'>
            <i class="iconContact fa-solid fa-phone"></i>
            <p className='infoContact'>+1 234 56 78</p>
          </div>
          <div className='contactItem'>
            <i class="iconContact fa-solid fa-envelope"></i>
            <p className='infoContact'>contact@gmail.com</p>
          </div>
        </div>
        <div className='payments'>
          <img src={amercian} alt="american" />
          <img src={master} alt="master" />
          <img src={paypla} alt="paypal" />
          <img src={visa} alt="visa" />
        </div>
      </div>
    </div>
  )
}

export default Footer