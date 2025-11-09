const validators = (email, pass) => {
  const emailValidators =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const passValidators =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      pass
    );

  if (!emailValidators) {
    return "Email is not valid.";
  }
  if (!passValidators) {
    return "Password is not valid.";
  }
  return null;
};

export default validators;
