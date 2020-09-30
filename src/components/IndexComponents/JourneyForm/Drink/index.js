import React, { useState } from 'react';


function DrinkForm({ INITIAL_STATE = { location: '', Place: '', Extra: '' } }) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label>
        Location:
        <input
          type="text"
          name='food'
          value={formData.food}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form >
  )
};

export default DrinkForm;