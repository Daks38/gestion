const express = require("express");
const Task = require("../models/Tasks");

const router = express.Router();
router.use(express.json());

//Find all Tasks
router.get("/", async (req, res) => {
  const allTasks =  await Task.find();
  res.status(200).json(allTasks);
});

//Find tasks by id
router.get("/:id", async (req, res) => {
  try {
    const allTasks = await Task.findById(req.params.id);
    if (!allTasks) {
      res.status(500).json({ msg: "Cet id ne corespond à aucune tâches" });
    } else {
      res.status(200).json(allTasks);
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
});

//Create Tasks
router.post("/", async (req, res) => {
  try {
    const newTasks = new Task({
      title: req.body.title,
      content: req.body.content,
    });
    if (!req.body.title) {
      res.status(500).json("Renseignez le champs titre ");
    } else if (!req.body.content) {
      res.status(500).json("Renseignez le champs description ");
    } else {
      registed = await newTasks.save();
      res.status(200).json({ task: registed, msg: "Tâches créée avec succès" });
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
});

//Update Tasks
router.put("/:id", async (req, res) => {
  try {
    const updateTasks = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    
      res
        .status(200)
        .json({ task: updateTasks, msg: "Tâches mise à jour avec succès" });
  } catch (err) {
    res.status(400).json(err.message);
  }
});
//Delete tasks by id
router.delete("/:id", async (req, res) => {
  try {
    const delTask  = await Task.findByIdAndDelete(req.params.id);
    if (!delTask) {
    res.status(500).json({ msg: "Cet id n'existe plus" });
    }else{
    res.status(200).json({ msg: "Tâche suprimée avec succès." });
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
