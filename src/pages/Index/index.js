import React from 'react';
import JourneyForm from '../../components/JourneyForm';
import Nav from '../../components/Nav/index';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className="grid-container">
      <Nav />
      <Header />
      <div className="body-container">
        <JourneyForm />
      </div>
      <Footer />
    </div>
  )

};

export default Home;