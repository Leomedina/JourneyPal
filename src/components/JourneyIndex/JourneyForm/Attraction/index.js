import React, { useState } from 'react';
import { formAttractionState } from '../../../../utilities/formStatesUtils';


function AttractionForm({ setTripState }) {
  const [formData, setFormData] = useState({ "attraction": "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setTripState(formAttractionState);
    setFormData({ "attraction": "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p><label>Food:
        <input
          type="text"
          name="attraction"
          placeholder="Museum, Theater, Park etc"
          value={formData.attraction}
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

export default AttractionForm;