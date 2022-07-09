import React, {useState} from 'react';

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