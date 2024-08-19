import React from 'react'
import Card from '../../components/Card'
import {data} from "../../data/gameData"
import "./style.css"

const Home = () => {
  return (
    <div className='grid'>
      {
        data.slice(0,200)?.map((elem, index) => {
          return <Card  name={elem.name} image={elem.thumb2} key={index} />
        })
      }
    </div>
  )
}

export default Home
