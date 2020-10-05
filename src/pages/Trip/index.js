import React from 'react';
import Nav from '../../components/Nav/index';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Trip from '../../components/Trip';

function Home() {
  return (
    <div className="grid-container">
      <Nav />
      <Header message="enjoy your trip!" />
      <Trip />
      <Footer />
    </div>
  );
};

export default Home;