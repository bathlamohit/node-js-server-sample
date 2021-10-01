const express = require("express");
const dataRoutes = require("./routes/data");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
module.exports = (app) => {

    app.use(cookieParser());
    app.use(cors());
    app.use(helmet());
    app.use(express.json({ limit: "2mb" }));
    app.use("/data", dataRoutes);
    app.use("/", errorHandler);
    app.use("*", function (req, res) {
        return res.status(404).send({ message: "Invalid request" });
    });
};

const errorHandler = async (err, req, res, next) => {
    if (err && err.response && err.response.data && err.response.data.message) {
        return res.status(400).send({ message: err.response.data.message });
    } else if (err && err.message) {
        return res.status(400).send({ message: err.message });
    }
    return res.status(500).send({ message: "Server error" });
};
