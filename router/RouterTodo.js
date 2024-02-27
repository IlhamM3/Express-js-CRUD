import express from "express";
import { getTodos, createTodos, updateTodos, deleteTodos } from "../controller/ControllerTodo.js";

const RouterTodo = express.Router();

RouterTodo.get('/todos', getTodos);
RouterTodo.post('/todos', createTodos);
RouterTodo.patch('/todos/:id', updateTodos);
RouterTodo.delete('/todos/:id', deleteTodos);

export default RouterTodo;