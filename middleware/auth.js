import jwt from "jsonwebtoken";
import secretKey from '../configuration/jwtSecret.js';

const authorize = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Silakan Login Terlebih Dahulu' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, secretKey);
    req.username = decoded.username;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token tidak Valid' });
  }
};

export default authorize
