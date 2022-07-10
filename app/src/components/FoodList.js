import React, {useState, useEffect} from 'react';
import Food from './Food';
import FoodForm from './FoodForm';
import Row from 'react-bootstrap/Row'
import http from '../http-common';

function FoodList(props) {
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dummy, setDummy] = useState(false);
  
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
  }, [dummy]);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      try {
        const response = await http.get('/categories');
        console.log(response.data._embedded.categoryList);
        setCategories(response.data._embedded.categoryList);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  const addFood = food => {
    console.log(food);

    if(!food.description || /^\s*$/.test(food.description)) {
      return; 
    }
    
    http.post('/foods', food)
      .then(response => {
        console.log(response)
      }).then(
        () => setDummy(!dummy)
      );
  };

  const removeFood = id => {
    http.delete('/foods/' + id)      
      .then(response => {
      console.log(response)
    }).then(
      () => setDummy(!dummy)
    );
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

<<<<<<< Updated upstream
=======
  const filteredFood = foods.filter(food => {
      //if no input the return the original
      if (props.input === '') {
        return food;
    }
    //return the item which contains the user input
    else {
        return food.text.toLowerCase().includes(props.input)
    }
  })
>>>>>>> Stashed changes

  return ( 
    <React.Fragment>
      <Row className="mt-4 mx-2" as="h2">Bought anything interesting?</Row>
      <Row className="mt-4">
        <FoodForm onSubmit={addFood} categories={categories}/>
      </Row>
      <Row className="mt-4">
        <Food 
          foods={filteredFood}
          finishFood={finishFood}
          removeFood={removeFood}
          updateFood={updateFood}
        />
      </Row>
    </React.Fragment>
  );
}

export default FoodList;