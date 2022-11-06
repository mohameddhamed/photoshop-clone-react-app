import React from 'react'

export default function Slider(props) {
  const {handleSlide,min,max,value}=props
  return (
   <input 
   type="range"
   onChange={handleSlide}
   min={min}
   max={max}
   value={value}
   />
  )
}
