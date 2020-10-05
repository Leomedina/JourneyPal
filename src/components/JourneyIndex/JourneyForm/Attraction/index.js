import React, { useState, useContext } from 'react';
import DispatchContext from "../../../../context/dispatchContext";
import { formAttractionState } from '../../../../utilities/formStatesUtils';
import { addAttraction } from "../../../../context/actions";

function AttractionForm({ setTripState }) {
  const [formData, setFormData] = useState({ "attraction": "" });
  const dispatch = useContext(DispatchContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTripState(formAttractionState);
    dispatch(addAttraction(formData.attraction));
    setFormData({ "attraction": "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="box">
        <label htmlFor="attraction">What would you like to see?</label>
        <input
          required
          type="text"
          name="attraction"
          placeholder="Museum, Theater, Park etc."
          value={formData.attraction}
          onChange={({ target }) => { setFormData({ [target.name]: target.value }) }}
        />
      </p>
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