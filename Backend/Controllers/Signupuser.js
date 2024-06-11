import express from "express"
import bcrypt from "bcryptjs"
import User from "../Models/Authmodel.js";

const Signupuser = async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username, email, password);

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        console.log(hashedPassword,"ha");
        const newUser = new User({ username, email, password: hashedPassword });

        await newUser.save();

        if (newUser) {
            res.status(201).json({ message: 'User registered successfully' });
        } else {
            res.status(500).json({ message: 'Something went wrong' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}

export default Signupuser;