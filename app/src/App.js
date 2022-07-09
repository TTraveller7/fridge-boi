import './App.css';
import FoodList from './components/FoodList';
import { useState, useEffect } from 'react';
import http from './http-common';

function App() {
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

  return (
    <div className="fridge-boi">
      <FoodList />
    </div>
  );
}

export default App;
