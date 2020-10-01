import React, { useState, useContext } from 'react';
import DispatchContext from "../../../../reducers/dispatchContext";
import { formLocationState } from '../../../../utilities/formStatesUtils';
import { addLocation } from "../../../../reducers/actions";

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
      <p><label>Location:
        <input
          type="text"
          name="location"
          placeholder="NYC, Chicago, Nairobi, etc"
          value={formData.location}
          onChange={({ target }) => { setFormData({ [target.name]: target.value }) }}
        /></label></p>
      <p><button>next</button></p>
      <p><img
        src="https://i.imgur.com/mHbnk9J.png"
        className="emoji"
        alt="plane emoji"
      /></p>
    </form >
  )
};

export default LocationForm;