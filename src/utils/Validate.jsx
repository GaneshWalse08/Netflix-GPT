export const checkValidData = (userName, email, password, isSignIn ) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);


  if (!isSignIn) {
    const isUserNameValid = /^[a-zA-Z0-9_]{3,16}$/.test(userName);

    if (!isUserNameValid)
      return "Please enter a valid User Name";
  }


  if(!isEmailValid) return "Please enter a valid email address.";

  if(!isPasswordValid) return "Password must be 8-15 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@.#$!%*?&).";


  return null;
}