import express from "express";
import { getTodos, createTodos, updateTodos, deleteTodos } from "../controller/ControllerTodo.js";
import authorize from "../middleware/auth.js";

const RouterTodo = express.Router();

RouterTodo.get('/todos', authorize, getTodos);
RouterTodo.post('/todos', authorize,  createTodos);
RouterTodo.patch('/todos/:id', authorize, updateTodos);
RouterTodo.delete('/todos/:id', authorize, deleteTodos);

export default RouterTodo;