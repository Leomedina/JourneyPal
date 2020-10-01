import React, { useState } from 'react';
import { formFoodState } from '../../../../utilities/formStatesUtils';

function FoodForm({ setTripState }) {
  const [formData, setFormData] = useState({ "food": "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setTripState(formFoodState);
    setFormData({ "food": "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p><label>Food:
        <input
          type="text"
          name="food"
          placeholder="Burgers, Ramen, Pizza, etc"
          value={formData.food}
          onChange={({ target }) => { setFormData({ [target.name]: target.value }) }}
        /></label></p>
      <p><button>next</button></p>
      <p><img
        src="https://i.imgur.com/mHbnk9J.png"
        className="emoji"
        alt="plane emoji"
      /></p>
    </form>
  );
};

export default FoodForm;