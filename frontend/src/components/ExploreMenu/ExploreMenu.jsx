import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets.js'
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Khám phá món ăn từ các vùng miền</h1>
        <p className='explore-menu-text'>Chọn món ăn yêu thích tới từ các vùng miền của Việt Nam</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"ALL":item.menu_name)} key={index} className='explore-menu-list-item' >  
                        <img className={category===item.menu_name?"active":""}src={item.menu_image} alt='menu' />
                        <p>{item.menu_name}</p>  
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu
