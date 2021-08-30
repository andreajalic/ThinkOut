const Validator = require("validator");
const { default: validator } = require("validator");

module.exports = function (data) {
  let errors = {};

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

 

  if (Validator.isEmpty(data.password)) {
    errors.email = "Password field is required";
  }

  //isLength(str[,options])
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
