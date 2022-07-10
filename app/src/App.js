import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import FoodList from './components/FoodList';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchBar from './components/SearchBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./pages/Auth"


function App() {
<<<<<<< Updated upstream
  return (
    <Container>
      <Row>
        <SearchBar />
      </Row>
      <Row>
        <Col md={{span: 8, offset: 2}}>
          <FoodList />
=======
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

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

  const setFilter = textInput => {
    setInput(textInput);
  }

  return (
    <Container>
      <Row>
        <SearchBar onChange={setFilter}/>
      </Row>
      <Row>
        <Col md={{span: 8, offset: 2}}>
          <FoodList input={input}/>
>>>>>>> Stashed changes
        </Col>
      </Row>
    </Container>
    //    <BrowserRouter>
    //    <Routes>
    //      <Route path="/auth" element={<Auth />} />
    //    </Routes>
    //  </BrowserRouter>
  );
}

export default App;
