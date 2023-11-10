// Function to validate an email address
exports.validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

// Function to validate a password (e.g., requires at least 6 characters)
exports.validatePassword = (password) => {
  return password.length >= 6;
};
