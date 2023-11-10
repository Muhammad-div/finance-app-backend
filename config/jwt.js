const jwt = require("jsonwebtoken");

const secretKey = "test"; // Replace with a strong and secure secret key
const tokenExpiration = "1d"; // Token expiration time (e.g., 1 day)

const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: tokenExpiration });
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
