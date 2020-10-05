import axios from 'axios';

export async function getVenueData(state) {
  try {
    const response = await axios({
      url: "https://journeypalapi.herokuapp.com/api/venue",
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "location": state.form.location,
        "category": state.form.attraction
      }
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export async function getFoodData(venue) {
  try {
    const response = await axios({
      url: "https://journeypalapi.herokuapp.com/api/eat",
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        lat: venue.venue_location.lat,
        lng: venue.venue_location.lng,
        type: "food"
      }
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getDrinkData(state, category) {
  try {
    const response = await axios({
      url: "https://journeypalapi.herokuapp.com/api/venue",
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "location": state.form.location,
        "category": category
      }
    });
    return response.data;
  } catch (error) {
    return error;
  }
};