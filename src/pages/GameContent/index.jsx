import React, {useEffect, useState} from 'react'
import "./style.css"
import {data} from "../../data/gameData"
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import loadingIcon from "../../svg/loader.svg"

const GameContent = () => {
  const { id } = useParams()
  const [getData, setGetData] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setGetData(() => {
        return data?.find((elem) => elem.name === id)
      })
      setLoading(false)
    },2000)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
  }, [data, id]);

  return (
    <div>
      {
        loading ? 
        <div className='loader'>
          <img src={loadingIcon} alt="" /> 
        </div>
        : 
        <div>
          <div className='game_content'>
            <iframe src={getData?.url} frameborder="0"></iframe>
          </div>

          <div className='grid top'>
            {
              data?.filter((item) => item?.name !== id)?.slice(0,50)?.map((elem, index) => {
                return <Card  name={elem.name} image={elem.thumb2} key={index} />
              })
            }
          </div>
        </div>
      }
    </div>
  )
}

export default GameContent
