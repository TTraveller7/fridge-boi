import React, {useState} from 'react'
import FoodForm from './FoodForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Food({foods, finishFood}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  return foods.map((food, index) => (
    <div 
      className={food.isFinished ? 'food-row finished' : 'food-row'}
      key={index}
    >
        <div key={food.id} onClick={() => finishFood(food.id)}>
          {food.text}
        </div>
        <div className='icon'>
          <RiCloseCircleLine />
          <TiEdit />
        </div>
    </div>
  ))
}

export default Food