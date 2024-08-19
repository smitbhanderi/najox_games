import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

const Card = ({ name,image }) => {
  return (
    <div className='card'>
       <Link to={`/game/${name}`}>
        <img src={image} alt="Sample photo"/>
        <div class="text">
          <a href="/" class="btn btn-primary btn-block">{name}</a>
        </div>
      </Link>
    </div>
  )
}

export default Card
