require("dotenv").config();


const isProd = process.env.NODE_ENV === "production";

const config = {
	gkrane: isProd ? process.env.PROD_GKRANE_URL : process.env.DEV_GKRANE_URL,

};

console.log(config);
module.exports = config;
