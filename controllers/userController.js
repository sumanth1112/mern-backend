import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const SECRET = "hello123";

constconst addUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await userModel.create({
    name,
    email,
    password: hashedPassword,
    role
  });

  res.json(result);
};

const showUsers = async (req, res) => {
  const result = await userModel.find();
  res.json(result);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const result = await userModel.findByIdAndDelete(id);
  res.json(result);
};

const login = async (req, res) => {
  const {email, password} = req.body;
  const found = await userModel.findOne({email});
  if(found) {
    const checkPassword = await bcrypt.compare(password, found.password);
    if(checkPassword) {
      const obj = {
        name: found.name,
        email: found.email,
        role: found.role
      };
      const token = jwt.sign(obj, SECRET, {expiresIn: "1h"});
      res.status(200).json({message: "Success", token});
    } else {
      res.status(401).json({message: "Invalid Password"});
    }
  } else {
    res.status(404).json({message: "User not found"});
  } 
};


export { addUser, showUsers, deleteUser, login};
