import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
        const {food_list} = useContext(StoreContext);


    return (
    <div className='food-display' id='food-display'>
        <h2>
            Các món nổi bật
        </h2>
        <div className='food-display-list'>
            {food_list.map((item,index)=>{
                
                if (category==="All" || category===item.food_category) {
                    return <FoodItem key={index} id = {item.food_id} name={item.food_name} image={item.food_image} recipe = {item.food_recipe} description = {item.food_description} category = {item.food_category}/>
                }


               
            })}
        </div>
      
    </div> 
  )
}

export default FoodDisplay
