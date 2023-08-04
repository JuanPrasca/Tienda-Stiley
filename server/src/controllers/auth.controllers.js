import user from '../models/users.models.js'
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
    const { name, lastname, email, password } = req.body;
    try {
        const passwordHash= await bcrypt.hash(password, 10)
        const newUser = new user({
            name,
            lastname,
            email,
            password:passwordHash
        });
        const userSaved = await newUser.save();
        res.status(201).json({
            id: userSaved._id,
            name: userSaved.name,
            lastname: userSaved.lastname,
            email: userSaved.email
        });
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export const login = (req, res) => {
    res.json({ message: "all is ok" });
}