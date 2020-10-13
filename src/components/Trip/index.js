import React, { useContext } from 'react';
import TripIcons from '../TripIcons';
import tripContext from "../../context/tripContext";
import './index.css';
import MapWrapper from './MapWrapper';

function Trip() {
  const state = useContext(tripContext);
  const { hero_venue, food_venue, last_venue, location } = state.trip;

  const TRIP_STATE = {
    "trip": false,
    "location": false,
    "attraction": false,
    "food": false,
    "drink": false,
  }
  return (
    <div className="trip-icons">
      <TripIcons tripState={TRIP_STATE} />
      <div className="trip">
        <h1>In <span>{location ? location : "loading..."},</span></h1>
        <h1>you'll enjoy <span>{hero_venue.venue_name ? hero_venue.venue_name : "loading..."}.</span></h1>
        <h1>Make sure to grab some food nearby at <span>{food_venue.venue_name ? food_venue.venue_name : "loading..."}.</span></h1>
        <h1>Lastly, why not try <span>{last_venue.venue_name ? last_venue.venue_name : "loading..."}.</span></h1>
      </div>
      <MapWrapper location={location} />
    </div >
  );
};

export default Trip;