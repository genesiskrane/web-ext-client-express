require("./config");

const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// HTTPS Redirect
app.use((req, res, next) => {
	if (process.env.NODE_ENV == "production")
		if (req.headers["x-forwarded-proto"] !== "https") {
			return res.redirect(`https://${req.headers.host}${req.url}`);
		}
	next();
});

app.set("trust proxy", true);

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "domains", ".pro")));

// Catch All
app.all("/{*any}", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

(async () => {
	app.listen(process.env.PORT, () => {
		console.log(`Server Started @ ${process.env.PORT}`);
	});
})();
