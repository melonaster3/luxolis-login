const checkPwd = (str) => {
  const containsNumber = /\d/.test(str); // Check for at least one number
  const containsLetter = /[a-zA-Z]/.test(str); // Check for at least one letter
  const containsSpecialChar = /[^a-zA-Z0-9]/.test(str); // Check for at least one special character

  if (!containsNumber || !containsLetter || !containsSpecialChar) {
    return "Wrong combination"; // Return an error message for incorrect combination
  } else if (str.length < 6) {
    return "Password should be at least 6 characters long.";
  } else if (str.length > 50) {
    return "Password is too long.";
  }
  return "ok"; // Return 'ok' if the password meets all requirements
};
//asdasdasdasdasd
export function validateCredentials(
  password,
  id,
  DummyPassword,
  DummyUserName,
  setError,
  nextPage,
  handleOpen
) {
  // check to see if the password and Id are corect
  const errors = {
    password: password !== DummyPassword,
    combination: checkPwd(password) !== "ok",
    id: id !== DummyUserName,
  };

  setError((prevState) => ({ ...prevState, ...errors }));

  //Set the errors to false and send to blank page
  if (!Object.values(errors).some((error) => error)) {
    setError((prevState) => ({
      ...prevState,
      id: false,
      combination: false,
      password: false,
    }));
    nextPage(true);
  } else {
    handleOpen();
  }
}

//Hardcoded Username and Password
export const DummyUserName = `test@luxpmsoft.com`;
export const DummyPassword = "test1234!";
