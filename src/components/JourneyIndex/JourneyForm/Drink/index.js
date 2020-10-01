import React, { useState } from 'react';


function DrinkForm() {
  const [formData, setFormData] = useState({ "drink": "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ "drink": "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p><label>Extra:
        <input
          type="text"
          name="drink"
          placeholder="Cocktails, Beer, Coffee, etc"
          value={formData.drink}
          onChange={({ target }) => { setFormData({ [target.name]: target.value }) }}
        /></label></p>
      <p><button>submit</button></p>
      <p><img
        src="https://i.imgur.com/mHbnk9J.png"
        className="emoji"
        alt="plane emoji"
      /></p>
    </form>
  );
};

export default DrinkForm;