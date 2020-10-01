import React, { useState, useContext } from 'react';
import DispatchContext from "../../../../reducers/dispatchContext";
import { formFoodState } from '../../../../utilities/formStatesUtils';
import { addFood } from "../../../../reducers/actions";

function FoodForm({ setTripState }) {
  const [formData, setFormData] = useState({ "food": "" });
  const dispatch = useContext(DispatchContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTripState(formFoodState);
    dispatch(addFood(formData.food));
    setFormData({ "food": "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="box">
        <label htmlFor="food">What would you like to eat?</label>
        <input
          type="text"
          name="food"
          placeholder="Burgers, Ramen, Pizza, etc"
          value={formData.food}
          onChange={({ target }) => { setFormData({ [target.name]: target.value }) }}
        />
      </p>
      <p><button>next</button></p>
      <p><img
        src="https://i.imgur.com/mHbnk9J.png"
        className="emoji"
        alt="plane emoji"
      /></p>
    </form >
  );
};

export default FoodForm;