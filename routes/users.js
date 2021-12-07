import express from 'express';

import { createUser, deleteUserById, getUsers, getUserById, updateUserById  } from '../controllers/usersControllers.js';

const router = express.Router();

//all routes in here are starting with /users
router.get('/', getUsers);

router.post('/', createUser )

router.get('/:id', getUserById)

router.delete('/:id', deleteUserById)

router.patch('/:id', updateUserById)

export default router;