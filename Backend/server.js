const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define a Mongoose schema
const formSchema = new mongoose.Schema({
  formTitle: String,
  questions: [
    {
      type: { type: String },
      text: String,
      options: [String],
      selectedOption: Number,
    },
  ],
});

// Create a Mongoose model
const Form = mongoose.model('Form', formSchema);

// Routes
app.post('/api/forms', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save form data', error });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
