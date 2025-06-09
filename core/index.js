const { setAPI } = require("../api");

const config = require("../config");
const axios = require("axios");

const init = async () => {
	const appName = process.env.APPNAME;

	// SET API
	try {
		const { data } = await axios.get(`${config.gkrane}/data`);

		setAPI(data.find((app) => app.name == appName).apiURL);
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = { init };
