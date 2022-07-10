import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function SearchBar({ data }) {
const [filteredData, setFilteredData] = useState([]);
const [wordEntered, setWordEntered] = useState("");

const handleFilter = (event) => {
  const searchWord = event.target.value;
  setWordEntered(searchWord);
  const newFilter = data.filter((value) => {
    return value.text.toLowerCase().includes(searchWord.toLowerCase());
  });

  if (searchWord === "") {
    setFilteredData([]);
  } else {
    setFilteredData(newFilter);
  }
};

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">fridge-boi</Navbar.Brand>
        
        <Form>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </Container>
    </Navbar>
  );
}

        {/* <div className='searchInput'>
          <input type="text" placeholder="Enter name of the food you want ..." />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <BsSearch />
            ) : (
              <AiOutlineCloseCircle id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map(value => {
              return (
                <div className="dataItem">
                  <p>{value.text} </p>
                </div>
              );
            })}
          </div>
        )} */}

export default SearchBar;