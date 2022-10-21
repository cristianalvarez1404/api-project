import React from 'react'
import './NewsLetter.css'

const Newsletter = () => {
  return (
    <div className='containerLetter'>
        <h2 className='titleLetter'>NewsLetter</h2>
        <p className='descLetter'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In harum optio recusandae neque rerum ipsam?</p>
        <div className='inputContainerLetter'>
          <input className="inputLetter" type="text" placeholder='Your Email'/>
          <button className='btnLetter'>
            <i class="fa-solid fa-share"></i>
          </button>
        </div>
    </div>
  )
}

export default Newsletter