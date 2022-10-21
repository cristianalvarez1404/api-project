import React from 'react'
import './Login.css'

export const Login = () => {
  return (
    <div className='containerLogin'>
      <div className='wrapperLogin'>
        <h1 className='titleLogin'>SING IN</h1>
        <form className='formLogin'>
          <input type="text"  placeholder='username'/>
          <input type="text"  placeholder='password'/>
          <button className='btnCreate'>LOGIN</button>
          <a className="link" href="">Do not you remember the password</a>
          <a className="link" href="">Create a new accout</a>
        </form>
      </div>
    </div>
  )
}
