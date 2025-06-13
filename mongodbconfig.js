const express = require('express');
const mongoose = require('mongoose');
const app = express();


const mongoURI = 'mongodb+srv://aswinkumardr57:bOSVZ65xpBQurU3VbOSVZ65xpBQurU3@cluster0.ql0xgay.mongodb.net/form'

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(' MongoDB connected'))
.catch(err => console.error(' MongoDB connection error:', err));

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

