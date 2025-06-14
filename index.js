require("./config");
const { init } = require("./core");

const path = require("path");
const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Redirect HTTP to HTTPS (Production)
app.use((req, res, next) => {
	if (process.env.NODE_ENV === "production") {
		if (req.headers["x-forwarded-proto"] !== "https") {
			return res.redirect(`https://${req.headers.host}${req.url}`);
		}
	}
	next();
});

app.set("trust proxy", true);
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static assets based on TLD
app.use((req, res, next) => {
	const ext = req.hostname.split(".").reverse()[0];
	const basePath = path.join(__dirname, "client", ext, "dist");

	if (fs.existsSync(basePath)) {
		express.static(basePath)(req, res, next);
	} else {
		res.status(404).send("Not Found");
	}
});

app.all("/{*any}", (req, res) => {
	const ext = req.hostname.split(".").reverse()[0];
	const indexPath = path.join(__dirname, "client", ext, "dist", "index.html");

	if (fs.existsSync(indexPath)) {
		res.sendFile(indexPath);
	} else res.status(404).send("Not Found");
});

(async () => {
	await init();
	app.listen(process.env.PORT, () => {
		console.log(`Server Started @ ${process.env.PORT}`);
	});
})();
