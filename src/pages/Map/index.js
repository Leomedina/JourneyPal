import React from 'react';
import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer';
import MapWrapper from '../../components/MapWrapper';


function MapPage() {

  return (
    <div className="map-grid-container">
      <Nav />
      <MapWrapper />
      <Footer />
    </div>
  );
};

export default MapPage;
