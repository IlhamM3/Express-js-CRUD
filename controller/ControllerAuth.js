import User from "../model/ModelUser.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const secretKey = "dawdabwdbqiwdi1214312";
export const loginUsers = async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } }); 
        if (!user) {
            return res.status(401).json({ message: "User tidak ditemukan" });
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Password salah" });
        }

        const expires = 60 * 60 * 5;
        const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: expires });
        res.status(200).json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server Error" });
    }
};

export const register = async (req, res) => {
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