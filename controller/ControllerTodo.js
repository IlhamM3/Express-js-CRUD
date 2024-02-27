import Todo from "../model/ModelTodo.js";

export const getTodos = async(req, res) =>{
    try {
        const response = await Todo.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createTodos = async(req, res) =>{
    try {
        await Todo.create(req.body);
        res.status(201).json({msg: "Todo Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTodos = async(req, res) =>{
    try {
        await Todo.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Todo berhasil diupdate"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTodos = async(req, res) =>{
    try {
        await Todo.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Todo berhasil dihapus"});
    } catch (error) {
        console.log(error.message);
    }
}