import axios from "axios";

// Create an instance of Axios with a base URL
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
