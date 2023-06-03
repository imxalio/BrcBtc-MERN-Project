const projectsModel = require('./../modules/dbModule');

const getProjects = async (req, res) => {
  try {
    const getProjects = await projectsModel.find().sort({ _id: -1 });
    res.status(200).json({
      getProjects,
    });
  } catch (err) {
    res.end(err);
  }
};

const postProject = async (req, res) => {
  try {
    const itemInfo = req.body;
    const itemObject = {
      ...itemInfo,
      image: req.file.path,
    };

    const newItem = await projectsModel.create(itemObject);
    if (newItem) {
      const allProjects = await projectsModel.find().sort('_id');
      res.status(200).json({
        allProjects,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: res.status,
      Error: err.message,
    });
  }
};

const getProject = async (req, res) => {
  try {
    const getItem = await projectsModel.findOne({ _id: req.params.id });
    // console.log(getItem);

    res.status(200).json({
      getItem,
    });
  } catch (err) {
    let errMessage = '';

    if (err.kind == 'ObjectId') errMessage = 'user not found';

    res.status(404).json({
      message: errMessage,
    });
    console.log(err);
  }
};

const deleteProject = async (req, res) => {
  try {
    const itemRemoved = await projectsModel.findByIdAndDelete({
      _id: req.params.id,
    });

    res.status(200).json({
      message: 'Project removed',
    });
  } catch (err) {
    res.status(404).json({
      message: 'Project name not found',
    });
  }
};

module.exports = { getProjects, postProject, getProject, deleteProject };
