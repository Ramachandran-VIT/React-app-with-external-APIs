import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: "AIzaSyCzNa_-Z_wPi60mf3nVaxlDIHW4mlaDJx4"
  },
});
