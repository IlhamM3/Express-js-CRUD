import express from "express";
import { getUsers, updateUser, deleteUser } from "../controller/ControllerUser.js";
import { loginUsers, register } from "../controller/ControllerAuth.js";
import authorize from "../middleware/auth.js";

const router = express.Router();

router.get('/users', authorize,getUsers);

router.post('/login', loginUsers);
router.post('/register', register);

router.patch('/users/:id', authorize, updateUser);
router.delete('/users/:id', authorize, deleteUser);

export default router;