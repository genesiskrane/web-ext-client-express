const axios = require("axios");

const config = require("../config");

const { setAPI } = require("../api");
const data = require("../data");

const init = async () => {
	const appName = process.env.APPNAME;

	let app;

	// GET DATA
	try {
		const { data } = await axios.get(`${config.gkrane}/data`);
		app = data.find((app) => app.name == appName);
	} catch (error) {
		console.log(error.message);
	}
	
	// SET API
	setAPI(app.apiURL);

	// Set Data
	data.exts = app.exts;
};

module.exports = { init };
