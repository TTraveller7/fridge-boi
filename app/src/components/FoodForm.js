import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function FoodForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [time, setTime] = useState(props.edit ? props.edit.time : '');

  const handleChange = e => {
    setInput(e.target.value);

    let today = new Date();
    const date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+today.getFullYear();
    setTime(date);

  };

  const handleSubmit = e => {
    e.preventDefault();
    


    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      time: time
    });

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col md={{span: 10}}>
          <Form.Control 
          type="text" 
          placeholder="Add a food" 
          value={input}
          name='text'
          className='food-input'
          onChange={handleChange} />
        </Col>
        <Col>
          <Button variant="primary" type="submit">Add</Button>
        </Col>
      </Row>
      
    </form>
  );
}

export default FoodForm;