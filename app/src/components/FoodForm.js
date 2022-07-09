import React, {useState} from 'react';

function FoodForm(props) {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('');
  };

  return (
    <form className="food-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add a food" 
        value={input}
        name='text'
        className='food-input'
        onChange={handleChange} />
      <button className='food-input'>Add food purchased</button>
    </form>
  );
}

export default FoodForm;