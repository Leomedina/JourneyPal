import React from 'react';

function StartForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("HERE");
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <button>Start</button>
    </form >
  )
};

export default StartForm;