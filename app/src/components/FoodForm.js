import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { addDays } from '@progress/kendo-date-math';
import formatDate from '../utils/DateFormatter';

function FoodForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [select, setSelect] = useState(props.edit ? props.edit.category : 1);
  const [time, setTime] = useState(props.edit ? props.edit.time : '');

  const getRecommendTime = date => {
    return addDays(date, props.categories[select-1].maxStoreDays);
  };

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleSelectChange = e => {
    if (e !== null) {
      setSelect(e.target.value);

      let today = new Date();
      let recommendDate = getRecommendTime(today);
      // const date=recommendDate.getDate() + "/"+ parseInt(recommendDate.getMonth()+1) +"/"+recommendDate.getFullYear();
      setTime(formatDate(recommendDate));
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    props.onSubmit({
      description: input,
      category: {
        id:props.categories[select-1].id,
        description: props.categories[select-1].description,
        maxStoreDays: props.categories[select-1].maxStoreDays
      },
      startStoreDate: time
    });

    setInput('');
    setSelect(1);
    setTime('');
  };

  return (
    <form className='food-form' onSubmit={handleSubmit}>
      <Row>
        <Col md={{span: 5}}>
          <Form.Control 
          type="description" 
          placeholder="Add a food" 
          value={input}
          name='description'
          className='food-input'
          onChange={handleInputChange} />
        </Col>
        <Col md={{span: 5}}>
          <Form.Select
            value={select}
            onChange={handleSelectChange}
          >
            {props.categories.map(category => (
              <option key={category.id} value={category.id}>{category.description}</option>
              ))}
          </Form.Select>
        </Col>
        <Col>
          <Button variant="primary" type="submit">Add</Button>
        </Col>
      </Row>
      
    </form>
  );
}

export default FoodForm;
