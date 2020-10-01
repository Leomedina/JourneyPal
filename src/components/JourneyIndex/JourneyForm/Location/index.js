import React, { useState } from 'react';


function LocationForm({ setTripState }) {
  const [formData, setFormData] = useState({ "location": "" });
  const formLocationState = {
    "trip": false,
    "location": false,
    "food": true,
    "drink": false,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTripState(formLocationState);
    setFormData({ "location": "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label>
        Location:
        <input
          type="text"
          name="location"
          placeholder="NYC, Chicago, Nairobi, etc"
          value={formData.location}
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
        />
      </p>
    </form >
  )
};

export default LocationForm;