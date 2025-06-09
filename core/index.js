const { setAPI } = require("../api");

const config = require("../config");
const axios = require("axios");

const init = async () => {
    // SET API
	try {
		const { data } = await axios.get(`${config.gkrane}/data`);
		console.log(data);

		setAPI(data.core);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { init };
