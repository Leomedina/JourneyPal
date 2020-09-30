import React, { useState } from 'react';


function LocationForm() {
  const [formData, setFormData] = useState({ "location": "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(data => ({
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
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
      <button>Submit</button>
    </form >
  )
};

export default LocationForm;