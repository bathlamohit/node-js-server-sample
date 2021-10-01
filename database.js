const config = require("config");
const mongoose = require("mongoose");

const db = require("./model/data");
const port = 8003;
const Url = "mongodb://localhost:27017/my_sample_db";

module.exports = async (app) => {
    try {
        await mongoose.connect(Url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        mongoose.set("useUnifiedTopology", true);
        console.log("MONGODB connected...");
        console.log(Url);
        app.listen(port, () => {
            console.log(`Listening on Port ${port}`);
        });
        return;
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};
