import axios from 'axios';

export async function fetchData(state) {
  try {
    const response = await axios(
      "https://journeypalapi.herokuapp.com/trips"
    );

    const json = await response.json();

    return json;

  } catch (error) {
    return error;
  }
};