const express = require('express');

const router = express.Router();

const projectModel = require('../data/helpers/projectModel.js');

router.get('/', (req, res) => {
    projectModel.get(req.query)
        .then(projects => {
            res.status(200).json({ projects })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: "The project could not be retrieved." });
        });
});

router.get('/:id', (req, res) => {
    projectModel.get(req.params.id)
        .then(project => {
            res.status(200).json({ project })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: "The project could not be retrieved." });
        });
});

router.post('/', (req, res) => {
    const projectData = req.body;
    projectModel.insert(projectData)
        .then(newProject => {
            res.status(201).json(newProject);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: "There was an error while saving the new project to the database." });
        });
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    const id = req.params.id;
    projectModel.update(id, changes)
        .then(updatedProject => {
            res.status(200).json({ updatedProject, message: "The project has been modified." });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: "The project information could not be modified." });
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    let deletedProject = {}
    projectModel.get(id)
        .then(project => {
            deletedProject = project
        })

    projectModel.remove(id)
        .then(count => {
            res.status(200).json({ deletedProject, message: "Project has been successfully deleted." })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: "The project could not be removed." });
        });
});

module.exports = router;