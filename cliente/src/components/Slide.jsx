import React from 'react'

const Slide = ({el}) => {
  const {title,desc,img, bg} = el;
  return (
    <div className='slide' style={{backgroundColor:bg}}>
      <div className='imageContainer'>
        <img src={img} alt={title} />
      </div>
      <div className='infoContainer'>
        <h2 className='title'>{title}</h2>
        <p className='description'>
          {desc}
        </p>
        <button className='btn'>SHOW NOW</button>
      </div>
    </div>
  )
}

export default Slide