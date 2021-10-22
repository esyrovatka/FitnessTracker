import axios from "axios";

export const test = (user) => async () => {
  try {
    const response = await axios.post("http://localhost:3001/registr", user);
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};
