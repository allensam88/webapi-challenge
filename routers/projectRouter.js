const express = require('express');

const router = express.Router();

const projectModel = require('../data/helpers/projectModel.js');
const actionModel = require('../data/helpers/actionModel.js');

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

// router.put('/:id', validateUserId, (req, res) => {
//     const changes = req.body;
//     const id = req.params.id;
//     userDb.update(id, changes)
//         .then(count => {
//             userDb.getById(id)
//                 .then(updatedUser => {
//                     res.status(200).json({ updatedUser, message: "The user has been modified." });
//                 })
//         })
//         .catch(error => {
//             console.log(error);
//             res.status(500).json({ error: "The user information could not be modified." });
//         });
// });

// router.delete('/:id', validateUserId, (req, res) => {
//     let deletedUser = {}
//     userDb.getById(req.params.id)
//         .then(user => {
//             deletedUser = user
//         })

//     userDb.remove(req.params.id)
//         .then(count => {
//             res.status(200).json({ deletedUser, message: "User has been successfully deleted." })
//         })
//         .catch(error => {
//             console.log(error);
//             res.status(500).json({ error: "The user could not be removed" });
//         });
// });



module.exports = router;