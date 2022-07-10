import React, {useState} from 'react';
import Select from 'react-select';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { addDays, addWeeks } from '@progress/kendo-date-math';

function FoodForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [select, setSelect] = useState(props.edit ? props.edit.category : null);
  const [time, setTime] = useState(props.edit ? props.edit.time : '');

  const options = [
    { category: 'fresh-eggs', label: 'Fresh Eggs' },
    { category: 'fresh-milk', label: 'Fresh Milk (after opening)' },
    { category: 'bacon', label: 'Bacon' },
    { category: 'fresh-red-meat', label: 'Fresh Red Meat' },
    { category: 'fresh-poultry', label: 'Fresh Poultry' },
    { category: 'seafood', label: 'Seafood' },
    { category: 'vegetables', label: 'Vegetables' },
    { category: 'cooked-shellfish', label: 'Cooked Shellfish' },
    { category: 'lean-fish', label: 'Lean Fish' },
    { category: 'fatty-fish', label: 'Fatty Fish' },
    { category: 'cooked-fish', label: 'Cooked Fish' },
    { category: 'salad', label: 'Salad' },
    { category: 'soup-and-stews', label: 'Soup and stews' },
    { category: 'chicken-nuggets-and-patties', label: 'Chicken Nuggets and Patties' },
    { category: 'pizza', label: 'Pizza' }
  ];

  const getRecommendTime = (category, date) => {
    switch(category) {
      case 'fresh-eggs':
        return addWeeks(date, 5);
      case 'fresh-milk':
        return addDays(date, 3);
      case 'bacon':
        return addDays(date, 7);
      case 'fresh-red-meat':
        return addDays(date, 5);    
      case 'fresh-poultry':
        return addDays(date, 2);
      case 'seafood':
        return addDays(date, 2);
      case 'vegetables':
         return addDays(date, 7);
      case 'cooked-shellfish':
          return addDays(date, 4);    
      case 'lean-fish':
        return addDays(date, 2);
      case 'fatty-fish':
        return addDays(date, 2);
      case 'cooked-fish':
        return addDays(date, 4);    
      case 'salad':
        return addDays(date, 5);
      case 'soup-and-stews':
          return addDays(date, 4);
      case 'chicken-nuggets-and-patties':
          return addDays(date, 2);
      case 'pizza':
        return addDays(date, 4);
      default:
        return date;      
    }
  };

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleSelectChange = e => {
    if (e !== null) {
      setSelect(e);

      let today = new Date();
      let recommendDate = getRecommendTime(e.category, today);
      const date=recommendDate.getDate() + "/"+ parseInt(recommendDate.getMonth()+1) +"/"+recommendDate.getFullYear();
      setTime(date);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    props.onSubmit({
      description: input,
      category: select,
      startStoreDate: time
    });

    setInput('');
    setSelect(null);
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
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={null}
            placeholder="Select food category..."
            isSearchable={true}
            value={select}
            onChange={handleSelectChange}
            options={options}
          />
        </Col>
        <Col>
          <Button variant="primary" type="submit">Add</Button>
        </Col>
      </Row>
      
    </form>
  );
}

export default FoodForm;