import axios from "axios";

const KEY = "AIzaSyAT7AIx2B7d9FGjaRCZUOnHHN4UIJU4ubY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
// npm install axios@0.18.1
// CSS:https://semantic-ui.com/collections/grid.html
// GOOGLE API:https://console.developers.google.com/apis/credentials/key/d5aa200e-6917-4582-92e4-22246091c64a?project=storied-visitor-262021
// YOUTUBE: https://developers.google.com/youtube/v3/docs/search/list
// npm start
