require("dotenv").config();
const url = process.env.DATABASE_URL_IN_LOCAL;
const port = process.env.PORT;

const express = require("express");
const app = express();
app.use(express.json());

const path = require("path");
const httpStatusText = require("./utils/httpStatusText");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const mongoose = require("mongoose");
mongoose.connect(url).then(() => {
  console.log("Connected Database");
});

const cors = require("cors");
app.use(cors());

// Routers

const ambulanceRoute = require("./routes/ambulanceRoute");
app.use("/api/Ambulance", ambulanceRoute);

const bloodDiseasesRoute = require("./routes/bloodDiseasesRoute");
app.use("/api/Blood_Diseases", bloodDiseasesRoute);

const breastClinicRoute = require("./routes/breastClinicRoute");
app.use("/api/Breast_Clinic", breastClinicRoute);

const dermatologyRoute = require("./routes/dermatologyRoute");
app.use("/api/Dermatology", dermatologyRoute);

const generalSurgeryRoute = require("./routes/generalSurgeryRoute");
app.use("/api/General_Surgery", generalSurgeryRoute);

const intensiveCareRoute = require("./routes/intensiveCareRoute");
app.use("/api/Intensive_Care", intensiveCareRoute);

const internalMedicineRoute = require("./routes/internalMedicineRoute");
app.use("/api/Internal_Medicine", internalMedicineRoute);

const noseEarThroatRoute = require("./routes/noseEarThroatRoute");
app.use("/api/Ear_Nose_Throat", noseEarThroatRoute);

const nutritionRoute = require("./routes/nutritionRoute");
app.use("/api/Nutrition", nutritionRoute);

const obGynRoute = require("./routes/obGynRoute");
app.use("/api/Ob_Gyn", obGynRoute);

const ophthalmologyRoute = require("./routes/ophthalmologyRoute");
app.use("/api/Ophthalmology", ophthalmologyRoute);

const radiologyRoute = require("./routes/radiologyRoute");
app.use("/api/Radiology", radiologyRoute);

const userRoute = require("./routes/userRoute");
app.use("/api/User", userRoute);

const adminRoute = require("./routes/adminRoute");
app.use("/api/Admin", adminRoute);

const bookRoute = require("./routes/bookRoute");
app.use("/api/Book", bookRoute);

const visitRoute = require("./routes/visitRoute");
app.use("/api/Visit", visitRoute);

// Routers

// global middleware for not found router
app.all("*", (req, res, next) => {
  return res
    .status(404)
    .json({ status: httpStatusText.ERROR, message: "invalid resource" });
});

// global error handler
app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    status: error.statusText || httpStatusText.ERROR,
    code: error.statusCode || 500,
    message: error.message,
    data: null,
  });
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
