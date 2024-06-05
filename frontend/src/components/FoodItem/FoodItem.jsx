import React, { useState, useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'; // replace with the actual path
const FoodItem = ({id, name, recipe, description, image}) => {

  const [itemCount,setItemCount] = useState(0)
  const {whitlistItems, addToWhitlist, removeFromWhitlist} = useContext(StoreContext);
  return (
    <div> 
      <div className='food-item'>
        <div className="food-item-img-container" >
            <img src={image} alt="" className="food-item-image" />
              {!whitlistItems[id] 
              ?<img src={assets.add_1} alt="" onClick={()=>addToWhitlist(id)} className='add food-item-counter'/>
              :<div className='food-item-counter'>
                 <img src={assets.add_2} alt=""  />
                </div>
                ?<img src={assets.add_2} alt="" onClick={()=>removeFromWhitlist(id)} className='add food-item-counter'/>
                :<div className='food-item-counter'>
                   <img src={assets.add_1} alt=""  />
                  </div>
                  
              }
              </div> 
        <div className="food-item-info">
              <div className="food-item-name-difficulty">
                <p>{name}</p>
                <span>Khó</span>
            </div>
            <p className="food-item-desc">{description}</p>
            {/* <p className="food-item-recipe">{recipe}vnd</p> */}
        </div>
      </div>
    </div>
  )
}

export default FoodItem
