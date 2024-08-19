import React from 'react';
import "./style.css"
import { Link, useLocation } from "react-router-dom"
import { menu } from '../../data/constant'
import logo1 from "../../assets/images/logo1.jpg"

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className='header_container'>
      <div className='header_section'>
        <div className="logo">
          <Link to='/' >
            <img src={logo1} alt="" />
          </Link>
        </div>
        <div className="custom_menu">
          {
            menu?.map((elem) => {
              return (
                <div className={` menu_item ${pathname === elem.path && 'active'}`} key={elem.path}>
                  <Link to={elem.path} >
                    {elem.title}
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Header
