import jwt from "jsonwebtoken";
import 'dotenv/config'

const jwtSecret = process.env.JWT_SECRET;

function authenticateToken(req, res, next) {
  const token = req.header("Authorization");

  if(!token) {
    return res.status(401).json({ error: "Unauthorized: Token missing" })
  }

  jwt.verify(token, jwtSecret, (err, user) => {
    if(err) {
      // console.error("JWT Verification Error:", err);
      return res.status(401).json({ error: "Forbidden: Invalid token" })
    }

    req.user = user;
    next()
  });
}

export default authenticateToken;