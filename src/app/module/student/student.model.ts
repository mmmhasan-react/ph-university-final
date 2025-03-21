import { model, Schema } from "mongoose";
import { Gurdian, LocalGurdian, Student, UserName } from "./student.interface";

const UserNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
    maxlength: [20, "first name must be under 20 character"],
    trim: true,
    validate: {
      validator: function (value) {
        const firstName =
          String(value).charAt(0).toUpperCase() + String(value).slice(1);
        return firstName === value;
      },
      message: `{VALUE} must be first letter uppercase`,
    },
  },
  middleName: {
    type: String,
    required: true,
    maxlength: [20, "first name must be under 20 character"],
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: [20, "first name must be under 20 character"],
    trim: true,
  },
});
const GurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNumber: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNumber: { type: String, required: true },
});

const LocalGurdianSchema = new Schema<LocalGurdian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  address: { type: String, required: true },
  contactNumber: { type: String, required: true },
});
const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: UserNameSchema,
    required: [true, "first name lagbei lagbe"],
  },
  gender: {
    type: String,
    required: true,
    enum: {
      values: ["male", "female"],
      message: `{VALUE} is not valid gender`,
    },
  },

  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    message: `{VALUE} must be a valid blood group`,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  guardian: {
    type: GurdianSchema,
    required: true,
  },
  localGurdian: {
    type: LocalGurdianSchema,
    required: true,
  },
  profileImage: { type: String, required: true },
  isActive: {
    type: String,
    required: true,
    enum: ["active", "inactive"],
  },
});

export const StudentModel = model<Student>("Student", studentSchema);
