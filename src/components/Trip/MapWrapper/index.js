import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './index.css';

function MapWrapper({ location }) {
  const position = [51.505, -0.09];
  return (
    <Map
      center={position}
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
  );
};

export default MapWrapper;