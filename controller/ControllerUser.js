import User from "../model/ModelUser.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";

export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = async (req, res) => {
    try {
        const Cekemail = await User.findOne({ where: { email: req.body.email } });
        if (Cekemail) {
            return res.status(400).json({ msg: "Email sudah digunakan" });
        }

        await User.create(req.body);
        res.status(201).json({ msg: "Berhasil Registrasi" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Server Error" });
    }
};

export const loginUsers = async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } }); // Specify where condition
        if (!user) {
            return res.status(401).json({ message: "User tidak ditemukan" });
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Password salah" });
        }

        const secretKey = crypto.randomBytes(64).toString('base64');
        const expires = 60 * 60 * 5;
        const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: expires }); // Provide a valid secret key
        res.status(200).json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server Error" });
    }
};


export const updateUser = async(req, res) =>{
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "user berhasil diupdate"});
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteUser = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "user berhasil dihapus"});
    } catch (error) {
        console.error(error.message);
    }
}