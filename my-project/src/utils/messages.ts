export interface ValidationErrorMessages {
  [key: string]: string;
}

export const validationErrorMessages: ValidationErrorMessages = {
  default: "",
  min: "At least two digits required",
  mustMatch: "Passwords must match",
  atLeast6: "Password must contains at least 6 digits",
  required: "Field can not be empty",
  oneUpperCase: "Password must contains at least one uppercase letter",
  oneLowerCase: "Password must contains at least one lowercase letter",
  oneSpecialChar: "Password must contains at least one special character",
  oneNumeric: "Password must contains at least one numeric value",
};
