import React from 'react';
import Journey from '../../components/IndexComponents/Journey';
import Nav from '../../components/Nav/index';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className="grid-container">
      <Nav />
      <Header />
      <Journey />
      <Footer />
    </div>
  )

};

export default Home;