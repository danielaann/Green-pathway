const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://danielaannpereira:scott1811@projects.u5ffu.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.log('Database connection failed:', error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;