import React, { useContext } from 'react'
import './Whitlist.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Whitlist = () => {

  const {whitlistItems, food_list, removeFromWhitlist, getTotalWhitlistAmount} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='whitlist'>
      <div className="whitlist-items">
        <div className="whitlist-items-title">
          <p>Món ăn</p> <p>Tên món</p> <p>Độ khó</p> <p>Số lượng</p> <p>Xóa</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (whitlistItems[item.food_id]>0) {
            return (<div key={index}>
              <div className="whitlist-items-title whitlist-items-item">
                <img src={item.food_image} alt="" />
                <p>{item.food_name}</p>
                <p>{item.food_difficulty}</p>
                <div>{whitlistItems[item.food_id]}</div>
                <p className='whitlist-items-remove-icon' onClick={()=>removeFromWhitlist(item.food_id)}>x</p>
              </div>
              <hr />
            </div>)
          }
        })}
      </div>
      <div className="whitlist-bottom">
        <div className="whitlist-total">
         
          <button onClick={()=>navigate('/order')}>Nấu</button>
        </div>
     
      </div>
    </div>
  )
}

export default Whitlist
