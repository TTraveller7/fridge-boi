import React, {useState} from 'react';
import Select from 'react-select';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function FoodForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [select, setSelect] = useState(props.edit ? props.edit.category : '');
  const [time, setTime] = useState(props.edit ? props.edit.time : '');

  const options = [
    { category: 'fresh-eggs', label: 'Fresh Eggs' },
    { category: 'fresh-milk', label: 'Fresh Milk' },
    { category: 'bacon', label: 'Bacon' },
    { category: 'fresh-red-meat', label: 'Fresh Red Meat' },
    { category: 'fresh-poultry', label: 'Fresh Poultry' },
    { category: 'seafood', label: 'Seafood' },
    { category: 'vegetables', label: 'Vegetables' },
    { category: 'cooked-shellfish', label: 'Cooked Shellfish' },
    { category: 'lean-fish', label: 'Lean Fish' },
    { category: 'fatty-fish', label: 'Fatty Fish' },
    { category: 'cooked-fish', label: 'Cooked Fish' },
    { category: 'frozen-dinners', label: 'Frozen Dinners' },
    { category: 'salad', label: 'Salad' },
    { category: 'soup-and-stews', label: 'Soup and stews' },
    { category: 'chicken-nuggets-and-patties', label: 'Chicken Nuggets and Patties' },
    { category: 'pizza', label: 'Pizza' }
  ];

  const handleInputChange = e => {
    setInput(e.target.value);

    let today = new Date();
    const date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+today.getFullYear();
    setTime(date);

  };

  const handleSelectChange = e => {
    if (e !== null) {
      setSelect(e.label);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      category: select,
      time: time
    });

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col md={{span: 5}}>
          <Form.Control 
          type="text" 
          placeholder="Add a food" 
          value={input}
          name='text'
          className='food-input'
          onChange={handleInputChange} />
        </Col>
        <Col md={{span: 5}}>
          <Select
            className="basic-single"
            classNamePrefix="select"
            placeholder="Select food category..."
            isClearable={true}
            isSearchable={true}
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