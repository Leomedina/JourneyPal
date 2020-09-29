import React from 'react';
import JourneyForm from '../../components/JourneyForm';
import Header from '../../components/Header';

function Home() {
  return (
    <div className="grid-container">
      <Header />
      <div className="body-container">
        <JourneyForm />
      </div>
    </div>
  )

};

export default Home;