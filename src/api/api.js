const axios = require("axios");

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1/all",
});

async function get_countries() {
    const res = await api.get();
    return res.data;
}

module.exports = {
    get_countries,
};
