import axios from "axios";

export const registrAction = (user) => async () => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/registr`,
      user
    );
    localStorage.setItem("token", response.data);
  } catch (err) {
    console.log(err);
  }
};

export const loginAction = (user) => async () => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/login`,
      user
    );
    localStorage.setItem("token", response.data);
  } catch (err) {
    console.log(err);
  }
};

// export const logOut = () => {
//   localStorage.removeItem("token");
// };
