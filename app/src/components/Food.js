import React, {useState} from 'react';
import FoodForm from './FoodForm';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

function Food({foods, finishFood, removeFood, updateFood}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateFood(edit.id, value);
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <FoodForm edit={edit} onSubmit={submitUpdate} />;
  }

  return foods.map((food, index) => (
    <div 
      className={food.isFinished ? 'food-row finished' : 'food-row'}
      key={index}
    >
        <div key={food.id} onClick={() => finishFood(food.id)}>
          {food.text}
        </div>
        <div className='icon'>
          <RiCloseCircleLine
          onClick={() => removeFood(food.id)}
          className='delete-icon' />
          <TiEdit 
          onClick={() => setEdit({ id: food.id, value:  food.text })}
          className='edit-icon'/>
        </div>
    </div>
  ));
}

export default Food;