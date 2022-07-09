import React, {useState} from 'react';

function FoodForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [time, setTime] = useState(props.edit ? props.edit.time : '');
  var today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const handleChange = e => {
    setInput(e.target.value);
    

  };

  const handleSubmit = e => {
    e.preventDefault();
    
    setTime(date);

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      time: time
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