const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/', async (req, res) =>{
    const tasks = await Task.find();
    
    res.json(tasks);
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

router.post('/', async (req, res) => {
    const {title , responsable, description, priority} = req.body;
    const task = new Task({
        title,
        responsable,
        description,
        priority
    });

    await task.save();
    
    res.json({
        Status: 'Task save'
    });
});

router.put('/:id', async (req, res) =>{
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        Status: "Task update"
    });
});


router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
        Status: "Task deleted"
    });
});


module.exports = router;