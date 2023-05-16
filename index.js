const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// import the route
const formRoute = require("./routes/form");
const sendEmailRoute = require("./Controllers/sendEmail");



// connection to MongoDB
mongoose.connect("mongodb+srv://Mudit:Mudit123@formdata.3edtzjb.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected successfully'))
.catch(err => console.error('Database connection error:', err));

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// route middleware
app.use("/api", formRoute);
app.use("/api", sendEmailRoute);


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
