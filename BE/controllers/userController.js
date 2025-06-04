import bcrypt from 'bcryptjs';
import User from '../models/User.js';

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPassword(password) {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordPattern.test(password);
}

export const register = async (req, res) => {
    const {  email, password, name, bio } = req.body;

    if (!email || !password || !name || !bio ) {
        return res.status(400).json({ success: false, message: "Please fill all the required fields" });
    }
    if (!isValidEmail(email)) {
        return res.status(400).json({ success: false, message: "Invalid email format" });
    }
    if (!isValidPassword(password)) {
        return res.status(400).json({ success: false, message: "Password must have at least 8 characters with at least one letter and one number" });
    }

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            email: email,
            password: hashedPassword,
            name: name,
            bio: bio,
            propic: null,
            isDeleted: false
        });

        req.session.userId = user.id;

        return res.status(200).json({ success: true, message: "Account created successfully", user });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};


export const login = async(req,res)=>{
    const {email,password} =req.body;
    if(!email || !password){
        return res.status(400).json({success:false, message:"Please fill all the required fields"})
    }

    try {
        const user = await User.findOne({ where: { email } });
        if(!user || user.isDeleted){
            return res.status(401).json({success:false, message:'Invalid credentials'})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({success:false, message:"Invalid credentials"})
        }

        req.session.userId = user.id;
        return res.status(200).json({success:true, message:"Logged in successfully", userData:user});
    } 
    catch (error) {
        return res.status(500).json({success:false, message:error.message})
    }
}

export const logout = async (req, res) => {
    try{
        req.session.destroy(err => {
            if (err){
                return res.status(500).json({ success: false, message: 'Logout failed' });
            } 
            res.clearCookie('connect.sid'); 
            return res.status(200).json({ success: true, message: 'Logged out successfully!' });
        });
    }
    catch (err){
        return res.status(500).json({ success: false, message: error.message });
    }    
};

export const getCurrentUser = async (req, res) => {
    try { 
        const userId = req.userId;  
        const user = await User.findByPk(userId);
    
        if (!user || user.isDeleted) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
    
        return res.status(200).json({
            success: true,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                bio: user.bio,
                propic: user.propic
            }
        });
  
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};

export const updateCurrentUser = async (req, res) => {
    try {
        const userId = req.userId;
        const { name, bio, propic } = req.body;
  
        const user = await User.findByPk(userId);
    
        if (!user || user.isDeleted) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
  
        user.name = name ?? user.name;
        user.bio = bio ?? user.bio;
        user.propic = propic ;

        await user.save();

        return res.status(200).json({
        success: true,
        message: "User updated successfully",
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
            bio: user.bio,
            propic: user.propic
        }
        });
  
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};
 