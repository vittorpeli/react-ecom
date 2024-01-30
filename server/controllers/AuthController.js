import jwt from 'jsonwebtoken';
import { findUserByName, findUserByEmail, comparePassword, createUser, all} from '../repositories/AuthRepository.js';

const jwtSecret = process.env.JWT_SECRET;

function generateToken(user) {
  return jwt.sign({ userId: user.id, userEmail: user.email }, jwtSecret, { expiresIn: 1200});
}

async function login(req, res) {
  const { name, password } = req.body;

  try {
    const user = await findUserByName(name);

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await comparePassword(password, user);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    res.header('Authorization', generateToken(user));
    res.status(200).json({
      status: true,
      message: "Account login successful",
      data: user
    })
  } catch (error) {
    console.error(error);

    res.status(error.statusCode || 500).json({
      status: false,
      message: error.message || "Internal Server Error"
    })
  }
}

async function register(req, res) {
  const { name, email, password } = req.body;

  const existingUser = await findUserByEmail(email);
  if(existingUser.length > 0) {
    return res.status(409).json({ error: "Email already exists" });
  }

  const newUser = await createUser({ name, email, password });
  res.header('Authorization', generateToken(newUser));
  res.status(200).json({
    status: true,
    message: "Account login successful",
    data: newUser,
  });
}

async function getAll(req, res) {
  const users = await all();

  if(!users) {
    return res.status(404).json({ error: "Users not found" });
  }

  res.json({ users });
}

export default { login, register, getAll };