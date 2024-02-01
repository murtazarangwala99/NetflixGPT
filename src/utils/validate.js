export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!email || !password) return "Please Enter email and password";
  if (!isEmailValid) return "Email not Valid";
  if (!isPasswordValid) return "Password not Valid";

  return null;
};
