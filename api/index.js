const axios = require("axios");

let instance;

const setAPI = (url) => {
	api = axios.create({
		baseURL: `https://${url}/api`,
		headers: {
			"Content-Type": "application/json",
		},
		timeout: 10000,
    });
};

module.exports = { instance, setAPI };
