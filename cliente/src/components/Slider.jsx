import React from 'react'
import { useState } from 'react'
import './Slider.css'
import { sliderItems } from '../data'
import Slide from './Slide'
import { useEffect } from 'react'
import axios from 'axios'

const lengthSlider = sliderItems.length - 1;

const Slider = () => {
  const [sliderIndex, setSliceIndex] = useState(0);

  const handleClick = (direction) => {
    if(direction ==="left"){
      setSliceIndex(sliderIndex > 0 ? sliderIndex - 1 : lengthSlider)
    }else{
      setSliceIndex(sliderIndex < lengthSlider ? sliderIndex + 1 : 0)
    }
  }

  return (
    <div className='container'>
      <div className='arrow arrow-left' onClick={() => handleClick('left')} >
        <i class="fa-solid fa-chevron-left"></i>
      </div>
       <div className='arrow arrow-right'  onClick={() => handleClick('right')}>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      <div className='wrapperSlide' style={{transform:`translateX(${sliderIndex * - 100}vw)`}}>
        {sliderItems.map(el => <Slide key={el.id} el={el}/>)}
      </div>  
    </div>
  )
}

export default Slider