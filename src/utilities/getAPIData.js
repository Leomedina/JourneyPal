import axios from 'axios';

export async function getAPIData(state) {
  try {
    const response = await axios({
      url: "https://journeypalapi.herokuapp.com/api/venue",
      method: "GET",
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