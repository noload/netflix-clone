export const checkValidate = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/.test(password);

  if (!isEmailValid) return "Email ID is Not Valid";
  if (!isPasswordValid) return "Password Not valid";

  return null;
};
