import jwt from 'jsonwebtoken';
import { findUserByName, findUserByEmail, comparePassword, createUser, all} from '../repositories/AuthRepository.js';

const jwtSecret = process.env.JWT_SECRET;

function generateToken(user) {
  return jwt.sign({ userId: user.id, userEmail: user.email }, jwtSecret, { expiresIn: 1200});
}

async function login(req, res) {
  const { name, password } = req.body;

  const userArray = await findUserByName(name);

  if (!userArray || userArray.length === 0) {
    return res.status(401).json({ error: "Invalid name" });
  } 

  let authenticatedUser;

  for(const user of userArray) {
    if(await comparePassword(password, user.password)) {
      authenticatedUser = user;
      break;
    }
  }

  if(!authenticatedUser) {
    return res.status(401).json({ error: "Invalid password" });
  }

  const token = generateToken(authenticatedUser);
  res.header('Authorization', token);
  res.json({ ...authenticatedUser, token });
}

async function register(req, res) {
  const { name, email, password } = req.body;

  const existingUser = await findUserByEmail(email);
  if(existingUser.length > 0) {
    return res.status(409).json({ error: "Email already exists" });
  }

  const newUser = await createUser({ name, email, password });
  const token = generateToken(newUser);
  res.header('Authorization', token);
  res.json({ token });
}

async function getAll(req, res) {
  const users = await all();

  if(!users) {
    return res.status(404).json({ error: "Users not found" });
  }

  res.json({ users });
}

export default { login, register, getAll };