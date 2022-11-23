import axios from 'axios';

const url = axios.create({
    baseURL: 'http://84.201.161.183/',
});

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