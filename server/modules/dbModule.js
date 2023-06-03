const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  description: String,
  twitter: String,
  discord: String,
  date: Date,
});

const projectModel = new mongoose.model('ProjectsModel', projectsSchema);

module.exports = projectModel;
