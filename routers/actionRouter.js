const express = require('express');

const router = express.Router();

const projectModel = require('../data/helpers/projectModel.js');
const actionModel = require('../data/helpers/actionModel.js');

// router.post('/', validateUser, (req, res) => {
//     const userData = req.body;
//     userDb.insert(userData)
//         .then(newUser => {
//             res.status(201).json(newUser);
//         })
//         .catch(error => {
//             console.log(error);
//             res.status(500).json({ error: "There was an error while saving the new user to the database." });
//         });
// });

// router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
//     const postData = req.body;
//     postDb.insert(postData)
//         .then(newPost => {
//             res.status(201).json(newPost);
//         })
//         .catch(error => {
//             console.log(error);
//             res.status(500).json({ error: "There was an error while saving the new post to the database." });
//         });
// });

// router.get('/', (req, res) => {
//     userDb.get(req)
//         .then(users => {
//             res.status(200).json({ users })
//         })
//         .catch(error => {
//             console.log(error);
//             res.status(500).json({ error: "The users could not be retrieved." });
//         });
// });

// router.get('/:id', validateUserId, (req, res) => {
//     userDb.getById(req.params.id)
//         .then(user => {
//             res.status(200).json({ user })
//         })
//         .catch(error => {
//             console.log(error)
//             res.status(500).json({ error: "The user could not be retrieved." })
//         })
// });

// router.get('/:id/posts', (req, res) => {
//     userDb.getUserPosts(req.params.id)
//         .then(userPosts => {
//             res.status(200).json({ userPosts })
//         })
//         .catch(error => {
//             console.log(error)
//             res.status(500).json({ error: "The user could not be retrieved." })
//         })
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

module.exports = router;