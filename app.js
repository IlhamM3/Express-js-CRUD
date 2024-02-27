import express from "express";
import cors from "cors";
import router from "./router/routeruser.js";
import RouterTodo from "./router/RouterTodo.js";


const app = express();
app.use(cors());
app.use(express.json());

// ROUTER
app.use(router);
app.use(RouterTodo);

const port = 8000;
app.listen(port, ()=> console.log(`Server sedang berjalan di port ${port}`));