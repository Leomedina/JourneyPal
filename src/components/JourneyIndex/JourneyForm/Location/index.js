import React, { useState, useContext } from 'react';
import DispatchContext from "../../../../context/dispatchContext";
import { formLocationState } from '../../../../utilities/formStatesUtils';
import { addLocation } from "../../../../context/actions";

function LocationForm({ setTripState }) {
  const [formData, setFormData] = useState({ "location": "" });
  const dispatch = useContext(DispatchContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTripState(formLocationState);
    dispatch(addLocation(formData.location));
    setFormData({ "location": "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="box">
        <label htmlFor="location">Where would you like to visit?</label>
        <input
          required
          type="text"
          name="location"
          placeholder="NYC, Chicago, Nairobi, etc"
          value={formData.location}
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

export default LocationForm;