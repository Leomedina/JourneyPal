import React, { useState, useContext } from 'react';
import DispatchContext from "../../../../context/dispatchContext";
import tripContext from "../../../../context/tripContext";
import * as a from "../../../../context/actions";
import { getVenueData, getFoodData, getDrinkData } from '../../../../utilities/getAPIData';
import { useHistory } from 'react-router-dom';

function DrinkForm() {
  const [formData, setFormData] = useState({ "drink": "" });
  const dispatch = useContext(DispatchContext);
  const state = useContext(tripContext);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(a.addDrink(formData.drink));
    handleData(state);
    history.push("/trip");
  };

  async function handleData(state) {
    const venue = await getVenueData(state);
    const food = await getFoodData(venue[0]);
    const drink = await getDrinkData(state, formData.drink);
    dispatch(a.addHeroLocation(venue[0]));
    dispatch(a.addFoodLocation(food[0]));
    dispatch(a.addLastVenue(drink[0]));
    dispatch(a.addTripLocation(state.form.location));
  }

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