import axios from 'axios';

const url = axios.create({
    baseURL: 'http://158.160.19.180/',
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
    console.log(JSON.stringify(line));
    const obj = {
        "devices": line.devices, "temperature": line.temperature
    }
    console.log(obj);
    let result = url
      .post(`api/line`, JSON.stringify(line), config)
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
    return result;
}