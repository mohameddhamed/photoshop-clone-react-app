import React, { useState } from 'react';
import './App.css';
import Slider from './Slider'
import SidebarItem from './SidebarItem'

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
]

function App() {
  
  const [options,setOptions]=useState(DEFAULT_OPTIONS)
  const [selectedOption,setSelectedOption]=useState(0)
  
  //console.log(selectedOption)
  //console.log(selected.range.min)

  function handleSlide({target}){
    setOptions(prevOptions=>{
      
      return prevOptions.map((e,index)=>{
  
        if (index !== selectedOption) return e
        return {...e,value:target.value}
  
      })
      
    })
    //console.log(target.value)
    
  }
  console.log(options)
  
  function image(){

    let filters=options.map(e=>{
      return `${e.property}(${e.value}${e.unit})`
    })

    return {filter: filters.join(" ") }
  }

  return(
    <div className="container">
      <div className="main-image"  style={image()}/>
      <div className="sidebar">
        {options.map((e,index)=>{
          return (
          <SidebarItem 
          name={e.name}
          key={index}
          handleClick={()=>setSelectedOption(index)}
          active={index===selectedOption}
          />)
        })}
        
      </div>
      <Slider
      
      min={options[selectedOption].range.min}
      max={options[selectedOption].range.max}
      value={options[selectedOption].value}
      handleSlide={handleSlide}
      
      />
    </div>
  )
  
}
export default App;
