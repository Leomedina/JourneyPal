import React, { useState, useContext, useEffect } from 'react';
import DispatchContext from "../../../../context/dispatchContext";
import tripContext from "../../../../context/tripContext";
import { addDrink, completeForm } from "../../../../context/actions";
import { fetchData } from '../../../../utilities/fetchData';

function DrinkForm() {
  const [formData, setFormData] = useState({ "drink": "" });
  const dispatch = useContext(DispatchContext);
  const state = useContext(tripContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addDrink(formData.drink));
    dispatch(completeForm(state));
    setFormData({ "drink": "" });
  };
  
  useEffect(() => {
    fetchData(state).then(result => console.log(result));
  }, [state]);


  return (
    <form onSubmit={handleSubmit}>
      <p className="box">
        <label htmlFor="drink">Anything else you'd like to do?</label>
        <input
          type="text"
          name="drink"
          placeholder="Beer, Riverfront, Baseball Park, etc"
          value={formData.drink}
          onChange={({ target }) => { setFormData({ [target.name]: target.value }) }}
        />
      </p>
      <p><button>submit</button></p>
      <p><img
        src="https://i.imgur.com/mHbnk9J.png"
        className="emoji"
        alt="plane emoji"
      /></p>
    </form >
  );
};

export default DrinkForm;