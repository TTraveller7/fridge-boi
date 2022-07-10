import React, {useState, useEffect} from 'react';
import Food from './Food';
import FoodForm from './FoodForm';
import Row from 'react-bootstrap/Row'
import http from '../http-common';

function FoodList() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      try {
        const response = await http.get('/foods');
        console.log(response.data._embedded.foodList);
        setFoods(response.data._embedded.foodList);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  const addFood = food => {
    if(!food.text || /^\s*$/.test(food.text)) {
      return; 
    }
    
    http.post('/foods', food)
      .then(response => console.log(response));
  };

  const removeFood = id => {
    const removeArr = [...foods].filter(food => food.id !== id);

    setFoods(removeArr);
  };

  const updateFood = (foodId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return; 
    }

    setFoods(prev => prev.map(item => item.id === foodId ? newValue : item));
  }

  const finishFood = id => {
    let updatedFoods = foods.map(food => {
      if (food.id === id) {
        food.isFinished = !food.isFinished;
      }
      console.log(food.isFinished ? 'yummy' : 'ew');
      return food;
    });
    setFoods(updatedFoods);
    
  };


  return ( 
    <React.Fragment>
      <Row className="mt-4 mx-2" as="h2">Bought anything interesting?</Row>
      <Row className="mt-4">
        <FoodForm onSubmit={addFood}/>
      </Row>
      <Row className="mt-4">
        <Food 
          foods={foods}
          finishFood={finishFood}
          removeFood={removeFood}
          updateFood={updateFood}
        />
      </Row>
    </React.Fragment>
  );
}

export default FoodList;