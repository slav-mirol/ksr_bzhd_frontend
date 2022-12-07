import axios from 'axios';

const url = axios.create({
    baseURL: 'http://158.160.4.39/',
});

const config = {
    headers: {
      "Content-Type": "application/json",
    }
  }

export const getApiSuggestions = (word) => {
    let result = url
        .get(`api/device?query=${word}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return result;
};

export const postApiSuggestions = (line) => {
    let result = url
      .post(`api/line`, JSON.stringify(line), config)
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
    return result;
}