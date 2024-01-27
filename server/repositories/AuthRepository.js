import db from "../db/index.js";
import bcrypt from "bcrypt";

export async function findUserByEmail(email) {
  const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  return user;
}

export async function createUser({ name, email, password }) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const [user] = await db.query(`
    INSERT INTO users(name, email, password)
    VALUES($1, $2, $3)
    RETURNING id, name, email
  `, [name, email, hashedPassword]);
  return user;
}

export async function comparePassword(plainPassword, hashedPassword) {
  return bcrypt.compare(plainPassword, hashedPassword);
}