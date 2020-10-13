import React, { useContext } from 'react';
import Nav from '../../components/Nav/index';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Trip from '../../components/Trip';
import MapWrapper from '../../components/MapWrapper';
import tripContext from "../../context/tripContext";

function Home() {
  const state = useContext(tripContext);
  const { hero_venue } = state.trip;
  return (
    <div className="grid-container">
      <Nav />
      <Header message="enjoy your trip!" />
      <Trip />
      {hero_venue ? <MapWrapper /> : ""};
      <Footer />
    </div>
  );
};

export default Home;