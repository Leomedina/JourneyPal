import React, { useContext } from 'react';
import TripIcons from '../TripIcons';
import tripContext from "../../context/tripContext";
import { useHistory } from 'react-router-dom';
import './index.css';

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
        <h1>In <span>{location},</span></h1>
        <h1>you'll enjoy <span>{hero_venue.venue_name}</span></h1>
        <h1>Make sure to grab some food nearby at <span>{food_venue.venue_name}</span></h1>
        <h1>Lastly, why not try <span>{last_venue.venue_name}.</span></h1>
      </div>
      <p><img
        src="https://i.imgur.com/mHbnk9J.png"
        className="emoji start"
        alt="plane emoji"
      /></p>
    </div >
  );
};

export default Trip;