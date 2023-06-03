const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const apiController = require('./controllers/apiController');
const router = express.Router();
const multer = require('multer');

dotenv.config({ path: './.env' });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use('/upload', express.static('upload'));

app.use(express.json(console.log('hello from middleWare')));
app.use(cors());
app.use(bodyParser.json());

router
  .route('/')
  .get(apiController.getProjects)
  .post(upload.single('image'), apiController.postProject);

router
  .route('/project/:id')
  .get(apiController.getProject)
  .delete(apiController.deleteProject);

app.use('/', router);

module.exports = app;
