import './App.css';
import FoodList from './components/FoodList';
import { useState, useEffect } from 'react';
import http from './http-common';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchBar from './components/SearchBar';

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
    <Container>
      <Row>
        <SearchBar />
      </Row>
      <Row>
        <Col md={{span: 8, offset: 2}}>
          <FoodList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
