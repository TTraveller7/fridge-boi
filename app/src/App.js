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
  const [input, setInput] = useState('');

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
