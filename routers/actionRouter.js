const express = require('express');

const router = express.Router();

const actionModel = require('../data/helpers/actionModel.js');

router.get('/:id', (req, res) => {
    actionModel.get(req.params.id)
        .then(action => {
            if (!action) {
                res.status(404).json({ message: "The action with the specified ID does not exist." })
            } else {
                res.status(200).json({ action })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: "This action could not be retrieved." })
        })
});

router.post('/', (req, res) => {
    const actionData = req.body;
    if (!actionData.project_id || !actionData.description || !actionData.notes) {
        res.status(400).json({ errorMessage: "Please provide a project id and action description & notes for the action." });
    } else {
        actionModel.insert(actionData)
            .then(newAction => {
                res.status(201).json(newAction);
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ error: "There was an error while saving the new action to the database." });
            });
    }
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    const id = req.params.id;

    actionModel.get(id)
        .then(action => {
            if (!action) {
                res.status(404).json({ message: "The action with the specified ID does not exist." })
            } else {
                actionModel.update(id, changes)
                    .then(updatedAction => {
                        res.status(200).json({ updatedAction, message: "The action has been modified." });
                    })
                    .catch(error => {
                        console.log(error);
                        res.status(500).json({ error: "The action could not be modified." });
                    });
            }
        })
});

router.delete('/:id', (req, res) => {
    let deletedAction = {}
    const id = req.params.id;
    actionModel.get(id)
        .then(action => {
            if (!action) {
                res.status(404).json({ message: "The action with the specified ID does not exist." })
            } else {
                deletedAction = action
                actionModel.remove(req.params.id)
                    .then(count => {
                        res.status(200).json({ deletedAction, message: "Action has been successfully deleted." })
                    })
                    .catch(error => {
                        console.log(error);
                        res.status(500).json({ error: "The action could not be removed." });
                    });
            }
        })
});

module.exports = router;