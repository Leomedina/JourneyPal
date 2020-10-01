import React, { useState } from 'react';


function FoodForm({ setTripState }) {
  const [formData, setFormData] = useState({ "food": "" });
  const formFoodState = {
    "trip": false,
    "location": false,
    "food": false,
    "drink": true,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTripState(formFoodState);
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
      <p>
        <button>next</button>
      </p>
      <p>
        <img
          src="https://i.imgur.com/mHbnk9J.png"
          className="emoji"
          alt="plane emoji"
        />
      </p>
    </form >
  )
};

export default FoodForm;