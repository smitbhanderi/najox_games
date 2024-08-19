import React from 'react'
import "./style.css"
import Header from '../Header'

const ComponentWrapper = ({children}) => {
  return (
    <div className='container' style={{padding : "0px !important"}}> 
      <Header/>
      <div className='main_contain'>
        {children}
      </div>
    </div>
  )
}

export default ComponentWrapper
