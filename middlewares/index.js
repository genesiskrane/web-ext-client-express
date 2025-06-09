const main = async (req, res, next) => {
	console.log("main");
	next();
};

module.exports = [main];
