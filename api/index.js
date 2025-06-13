
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3001;

// ✅ MongoDB Atlas URI — replace <username>, <password>, <dbname>
const mongoURI ="mongodb+srv://aswinkumardr57:LIjzWi3m0iY6GOr2@cluster0.ql0xgay.mongodb.net/";

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(" MongoDB connected"))
.catch(err => console.error(" MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

app.get('/getdata/:id', (req, res) => {
  console.log(req.params);
  res.send("Hello world");
});

app.post('/createdata', (req, res) => {
  const data = req.body;
  console.log(data);
  res.send("Data received");
});

app.listen(port, () => {
  console.log("🚀 Server running on port", port);
});
