const express = require("express");
const app = express();
require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const profileRouter = require("./routes/profileRouter");
const purchaseRouter = require("./routes/purchaseRouter");
const spendingHabitRouter = require("./routes/spendingHabitRouter");
const reportRouter = require("./routes/reportRouter");

//Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//importing routes
app.use("/api/auth", userRouter);
app.use("/auth/userprofile", profileRouter);
app.use("/auth/user", purchaseRouter);
app.use("/auth/user", spendingHabitRouter);
app.use("/auth/report", reportRouter);
app.use("*", (req, res) => {
  res.status(404).json({ error: "Invalid Path" });
});

const port = process.env.PORT || 9090;
app.listen(port, () => {
  console.log('Server is listening on port: " ' + port);
});
