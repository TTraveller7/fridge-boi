import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';

function SearchBar(props) {

const handleChange = e => {
  props.onChange(e.target.value);
}

const handleSubmit = e => {
  e.preventDefault();

}

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">fridge-boi</Navbar.Brand>
        
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={handleChange}
            
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