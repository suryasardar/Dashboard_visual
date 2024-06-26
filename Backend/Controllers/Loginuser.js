import express from "express"
import User from "../Models/Authmodel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
const Loginuser = async (req, res) => {
    const { email, password } = req.body;
      
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
          return res.status(400).json({ message: 'Invalid credentials' });
        }
    
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
      }

   
}
export default Loginuser;