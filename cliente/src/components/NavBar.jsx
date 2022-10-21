import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navBar'>
      <div className='wrapper'>
        <div className='left'>
          <span className='language'>EN</span>
          <input className="inputSearch" type="text" placeholder='Search'/>
          <div className='search-container'>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className='center'>
          <h1 className='logo'>UNISTYLE</h1>
        </div>
        <div className='right'>
          <div className='register'>
            <span>Register</span>
          </div>
          <div className='singIn'>
            <span>Sing In</span>
          </div>
          <div className='menuItem'>
            <div className='cart'>
              <i class="fa-solid fa-cart-shopping">
                <div className='circle'><span>3</span></div>
              </i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar