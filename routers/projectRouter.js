const express = require('express');

const router = express.Router();

const projectModel = require('../data/helpers/projectModel.js');

// GET all projects
router.get('/', (req, res) => {
    projectModel.get()
        .then(projects => {
            res.status(200).json({ projects })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: "Projects could not be retrieved." });
        });
});

// GET a single project
router.get('/:id', (req, res) => {
    projectModel.get(req.params.id)
        .then(project => {
            if (!project) {
                res.status(404).json({ message: "The project with the specified ID does not exist." })
            } else {
                res.status(200).json({ project })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: "The project could not be retrieved." });
        });
});

// GET all actions for single project
router.get('/:id/actions', (req, res) => {
    projectModel.getProjectActions(req.params.id)
    .then(projectActions => {
        if (!projectActions) {
            res.status(404).json({ message: "The project with the specified ID does not exist." })
        } else {
            res.status(200).json({ projectActions })
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: "The project could not be retrieved." });
    });
})

// POST to create a new project
router.post('/', (req, res) => {
    const projectData = req.body;
    if (!projectData.name || !projectData.description) {
        res.status(400).json({ errorMessage: "Please provide name and description for the project." });
    } else {
        projectModel.insert(projectData)
            .then(newProject => {
                res.status(201).json(newProject);
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ error: "There was an error while saving the new project to the database." });
            });
    }
});

// PUT to update/change an existing project
router.put('/:id', (req, res) => {
    const changes = req.body;
    const id = req.params.id;

    projectModel.get(id)
        .then(project => {
            if (!project) {
                res.status(404).json({ message: "The project with the specified ID does not exist." })
            } else {
                projectModel.update(id, changes)
                    .then(updatedProject => {
                        res.status(200).json({ updatedProject, message: "The project has been modified." });
                    })
                    .catch(error => {
                        console.log(error);
                        res.status(500).json({ error: "The project information could not be modified." });
                    });
            }
        })
});

// DELETE an existing project
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    let deletedProject = {}

    projectModel.get(id)
        .then(project => {
            if (!project) {
                res.status(404).json({ message: "The project with the specified ID does not exist." })
            } else {
                deletedProject = project
                projectModel.remove(id)
                    .then(count => {
                        res.status(200).json({ deletedProject, message: "Project has been successfully deleted." })
                    })
                    .catch(error => {
                        console.log(error);
                        res.status(500).json({ error: "The project could not be removed." });
                    });
            }
        })
});

module.exports = router;