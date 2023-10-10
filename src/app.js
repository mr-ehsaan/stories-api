require("dotenv").config();
const express = require("express");
const cors = require("cors");
const storiesRoutes = require("./routes/stories");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/stories", storiesRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: { message: error.message } });
});

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }


module.exports = app;