import React, {useState} from 'react'
import Food from './Food'
import FoodForm from './FoodForm'

function FoodList() {
  const [foods, setFoods] = useState([])

  const addFood = food => {
    if(!food.text || /^\s*$/.test(food.text)) {
      return 
    }

    const newFoods = [food, ...foods]

    setFoods(newFoods)
  }

  const finishFood = id => {
    let updatedFoods = foods.map(food => {
      if (food.id === id) {
        food.isFinished = !food.isFinished
      }
      return food
    })
    setFoods(updatedFoods)
  }
  return ( 
    <div>
      <h1>What's the Food you purchased today?</h1>
      <FoodForm onSubmit={addFood}/>
      <Food 
        foods={foods}
        finishFood={finishFood}
      />
    </div>
  )
}

export default FoodList