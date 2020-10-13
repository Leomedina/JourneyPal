import React, { useContext } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import tripContext from "../../context/tripContext";
import './index.css';

function MapWrapper() {
  const state = useContext(tripContext);
  // const { hero_venue } = state.trip;
  // const { lat, lng } = hero_venue.venue_location;

  return (
    <>
      <Map
        center={[30.265872007769797, -97.7390037791335]}
        zoom={13}
        zoomControl={false}
        doubleClickZoom={false}
        dragging={false}
        keyboard={false}
        tap={false}
        touchZoom={false}
        boxZoom={false}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      </Map>
    </>
  );
};

export default MapWrapper;

// lat
// 30.265872007769797
// lng
//   - 97.7390037791335