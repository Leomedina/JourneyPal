import React, { useContext } from 'react';
import { Map, TileLayer, Popup, Marker } from 'react-leaflet';
import tripContext from "../../context/tripContext";
import './index.css';

function MapWrapper() {
  const state = useContext(tripContext);
  const { hero_venue } = state.trip;
  const { lat, lng } = hero_venue.venue_location;

  return (
    <Map
      center={[lat, lng]}
      zoom={17}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={[lat, lng]}>
        <Popup>{hero_venue.venue_name} <br /> {hero_venue.venue_location.address}</Popup>
      </Marker>

    </Map>
  );
};

export default MapWrapper;
