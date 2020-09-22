import axios from 'axios';

const KEY = 'AIzaSyDCR_WOU6b1E1268F1IJer4cWU_86bBdRo';

export const baseParams = {
    part: "snippet",
    maxResults: 15,
    key: KEY
  };

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
  });