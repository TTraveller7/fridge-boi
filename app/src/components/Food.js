import React, {useState} from 'react';
import FoodForm from './FoodForm';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import Table from 'react-bootstrap/Table'
import { addDays } from '@progress/kendo-date-math';
import formatDate from '../utils/DateFormatter';

function Food({foods, finishFood, removeFood, updateFood}) {
  console.log(foods);

  const [edit, setEdit] = useState({
    id: null,
    value: '',
    category: null,
    time: ''
  });

  const submitUpdate = value => {
    updateFood(edit.id, value);
    setEdit({
      id: null,
      value: '',
      category: null,
      time: ''
    })
  }

  const getBestBeforeDate = food => {
    const startDate = new Date(food.startStoreDate);
    return food.category.maxStoreDays && formatDate(addDays(startDate, food.category.maxStoreDays));
  }

  if (edit.id) {
    return <FoodForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <Table hover={true} className="mx-3">
      <thead>
        <tr>
          <th className='ml-3' scope="col">Description</th>
          <th scope="col">Category</th>
          <th scope="col">Best Before Date</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {foods.map(food => (
          <tr key={food.id}>
            <td key={food.id} onClick={() => finishFood(food.id)}>
              {food.description}
            </td>
            <td>
              {food.category.description}
            </td>
            <td>
              {getBestBeforeDate(food)}
            </td>
            <td className='icon'>
              <RiCloseCircleLine
              onClick={() => removeFood(food.id)}
              className='delete-icon'
              />
              {/* <TiEdit 
              onClick={() => setEdit({ id: food.id, value:  food.text, category: food.category, time: food.time })}
              className='edit-icon'/> */}
            </td>
          </tr>
        ))}     
      </tbody>

    </Table>
  )
}

export default Food;
