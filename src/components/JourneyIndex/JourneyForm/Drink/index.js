import React, { useState } from 'react';


function DrinkForm() {
  const [formData, setFormData] = useState({ "drink": "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ "drink": "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label>
        Extra:
        <input
          type="text"
          name="drink"
          placeholder="Cocktails, Coffee, Biscuits, etc"
          value={formData.drink}
          onChange={handleChange}
        />
      </label>
      <p>
        <button>submit</button>
      </p>
    </form >
  )
};

export default DrinkForm;