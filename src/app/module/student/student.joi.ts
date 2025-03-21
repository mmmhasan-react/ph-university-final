import Joi from "joi";

// Joi schema for validating UserName
const UserNameSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .regex(/^[A-Z][a-z]*$/, "capitalized") // Ensures first letter is uppercase
    .required()
    .messages({
      "string.empty": "First name is required",
      "string.max": "First name must be under 20 characters",
      "string.pattern.name": "First name must start with an uppercase letter",
    }),

  middleName: Joi.string().trim().max(20).required().messages({
    "string.empty": "Middle name is required",
    "string.max": "Middle name must be under 20 characters",
  }),

  lastName: Joi.string().trim().max(20).required().messages({
    "string.empty": "Last name is required",
    "string.max": "Last name must be under 20 characters",
  }),
});

// Joi schema for Guardian
const GuardianSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    "string.empty": "Father's name is required",
  }),
  fatherOccupation: Joi.string().trim().required().messages({
    "string.empty": "Father's occupation is required",
  }),
  fatherContactNumber: Joi.string().trim().required().messages({
    "string.empty": "Father's contact number is required",
  }),
  motherName: Joi.string().trim().required().messages({
    "string.empty": "Mother's name is required",
  }),
  motherOccupation: Joi.string().trim().required().messages({
    "string.empty": "Mother's occupation is required",
  }),
  motherContactNumber: Joi.string().trim().required().messages({
    "string.empty": "Mother's contact number is required",
  }),
});

// Joi schema for Local Guardian
const LocalGuardianSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.empty": "Local guardian's name is required",
  }),
  occupation: Joi.string().trim().required().messages({
    "string.empty": "Local guardian's occupation is required",
  }),
  address: Joi.string().trim().required().messages({
    "string.empty": "Local guardian's address is required",
  }),
  contactNumber: Joi.string().trim().required().messages({
    "string.empty": "Local guardian's contact number is required",
  }),
});

// Joi schema for Student
const StudentValidationSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    "string.empty": "ID is required",
  }),

  name: UserNameSchema.required(),

  gender: Joi.string().valid("male", "female").required().messages({
    "any.only": "{#value} is not a valid gender",
    "string.empty": "Gender is required",
  }),

  dateOfBirth: Joi.date().iso().required().messages({
    "date.base": "Date of birth must be a valid date",
    "any.required": "Date of birth is required",
  }),

  email: Joi.string().email().required().messages({
    "string.email": "Email must be a valid email address",
    "string.empty": "Email is required",
  }),

  avatar: Joi.string().uri().required().messages({
    "string.uri": "Avatar must be a valid URL",
    "string.empty": "Avatar is required",
  }),

  contactNo: Joi.string().trim().required().messages({
    "string.empty": "Contact number is required",
  }),

  emergencyContactNo: Joi.string().trim().required().messages({
    "string.empty": "Emergency contact number is required",
  }),

  bloodGroup: Joi.string()
    .valid("A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-")
    .messages({
      "any.only": "{#value} must be a valid blood group",
    }),

  presentAddress: Joi.string().trim().required().messages({
    "string.empty": "Present address is required",
  }),

  guardian: GuardianSchema.required(),

  localGuardian: LocalGuardianSchema.required(),

  profileImage: Joi.string().uri().required().messages({
    "string.uri": "Profile image must be a valid URL",
    "string.empty": "Profile image is required",
  }),

  isActive: Joi.string().required().messages({
    "boolean.base": "isActive must be a boolean (true or false)",
  }),
});

export { StudentValidationSchema };
