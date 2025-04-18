const express = require("express");
const app = express();

//dotenv
require("dotenv").config();

//mongoose
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Reliv:ullas1028@relivcluster.fhymutb.mongodb.net/reliv"
);

mongoose.connection.once("open", () => {
  console.log("mongoose connected");
});

mongoose.connection.on("error", (error) => {
  console.log("mongoose not connected" + error);
});

//middleware
app.use(express.json());

//routes
const userRoute = require("./route/UserRoute");
app.use("/api", userRoute);

//server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
