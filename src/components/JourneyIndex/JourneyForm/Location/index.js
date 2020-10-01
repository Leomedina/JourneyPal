import React, { useState, } from 'react';
import { formLocationState } from '../../../../utilities/formStatesUtils';

function LocationForm({ setTripState }) {
  const [formData, setFormData] = useState({ "location": "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setTripState(formLocationState);
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