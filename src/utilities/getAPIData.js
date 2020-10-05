import axios from 'axios';

export async function getAPIData(state) {
  try {
    const response = await axios({
      url: "http://localhost:3005/api/venue",
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
