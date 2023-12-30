require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const path = require("path");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const url = process.env.DATABASE_URL;
const port = process.env.PORT;

const httpStatusText = require("./utils/httpStatusText");

mongoose.connect(url).then(() => {
  console.log("Connected Database");
});

app.use(cors());
app.use(express.json());

// Routers

const anesthesiologyRoute = require("./routes/anesthesiologyRoute");
app.use("/api/anesthesiologys", anesthesiologyRoute);

const dentalRoute = require("./routes/dentalRoute");
app.use("/api/dentals", dentalRoute);

const dermatologyCosmetologyRoute = require("./routes/dermatologyCosmetologyRoute");
app.use("/api/dermatologyCosmetologys", dermatologyCosmetologyRoute);

const eyeRoute = require("./routes/eyeRoute");
app.use("/api/eyes", eyeRoute);

const heartRoute = require("./routes/heartRoute");
app.use("/api/hearts", heartRoute);

const internalMedicineRoute = require("./routes/internalMedicineRoute");
app.use("/api/internalMedicines", internalMedicineRoute);

const neurologyRoute = require("./routes/neurologyRoute");
app.use("/api/neurologys", neurologyRoute);

const noseEarThroatRoute = require("./routes/noseEarThroatRoute");
app.use("/api/noseEarThroats", noseEarThroatRoute);

const nutritionRoute = require("./routes/nutritionRoute");
app.use("/api/nutritions", nutritionRoute);

const obstetricsGynecologyRoute = require("./routes/obstetricsGynecologyRoute");
app.use("/api/obstetricsGynecologys", obstetricsGynecologyRoute);

const orthopedicRoute = require("./routes/orthopedicRoute");
app.use("/api/orthopedics", orthopedicRoute);

const pediatricsRoute = require("./routes/pediatricsRoute");
app.use("/api/pediatricss", pediatricsRoute);

const physicalTherapyRoute = require("./routes/physicalTherapyRoute");
app.use("/api/physicalTherapys", physicalTherapyRoute);

const radiologyRoute = require("./routes/radiologyRoute");
app.use("/api/radiologys", radiologyRoute);

const surgeryRoute = require("./routes/surgeryRoute");
app.use("/api/surgerys", surgeryRoute);

const userRoute = require("./routes/userRoute");
app.use("/api/users", userRoute);

// Routers

// global middleware for not found router
app.all("*", (req, res, next) => {
  return res
    .status(404)
    .json({ status: httpStatusText.ERROR, message: "invalid resource" });
});

// global error handler
app.use((error, req, res, next) => {
  res
    .status(error.statusCode || 500)
    .json({
      status: error.statusText || httpStatusText.ERROR,
      code: error.statusCode || 500,
      message: error.message,
      data: null,
    });
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
