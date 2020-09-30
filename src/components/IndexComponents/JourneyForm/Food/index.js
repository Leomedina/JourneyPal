import React, { useState } from 'react';


function FoodForm() {
  const [formData, setFormData] = useState({ "food": "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(data => ({
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ "food": "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label>
        Food:
        <input
          type="text"
          name="food"
          placeholder="Burgers, Ramen, Pizza, etc"
          value={formData.food}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form >
  )
};

export default FoodForm;