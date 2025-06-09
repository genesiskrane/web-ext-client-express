const data = require("../data");

const main = (req, res, next) => {
	console.log("main", data);

	res.send(data);
	next();
};

module.exports = [main];
