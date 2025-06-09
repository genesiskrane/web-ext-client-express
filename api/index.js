const axios = require("axios");

let instance;

const setAPI = (apiURL) => {
	api = axios.create({
		baseURL: `https://${apiURL}/api`,
		headers: {
			"Content-Type": "application/json",
		},
		timeout: 10000,
	});
};

module.exports = { instance, setAPI };
