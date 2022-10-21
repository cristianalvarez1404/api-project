import React from 'react'
import './Register.css'

export const Register = () => {
  return (
    <div className='containerRegister'>
      <div className='wrapperRegister'>
        <h1 className='titleRegister'>CREATE AN ACCOUNT</h1>
        <form className='formRegister'>
          <input type="text"  placeholder='name'/>
          <input type="text"  placeholder='last name'/>
          <input type="text"  placeholder='username'/>
          <input type="text"  placeholder='email'/>
          <input type="text"  placeholder='password'/>
          <input type="text"  placeholder='confirm password'/>
          <span className='clausure'>
            By creating an account, I consent to the proccessing of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className='btnCreate'>CREATE</button>
        </form>
      </div>
    </div>
  )
}