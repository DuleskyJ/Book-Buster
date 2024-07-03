const mongoose = require('mongoose');
require('dotenv').config();

const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database-name';

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;