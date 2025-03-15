import { model, Schema } from "mongoose";
import { Gurdian, LocalGurdian, Student, UserName } from "./student.interface";

const UserNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
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
  },
  name: UserNameSchema,
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },

  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
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
  },
  presentAddress: {
    type: String,
    required: true,
  },
  gurdian: GurdianSchema,
  localGurdian: LocalGurdianSchema,
  profileImage: { type: String, required: true },
  isActive: {
    type: String,
    required: true,
    enum: ["active", "inactive"],
  },
});

export const StudentModel = model<Student>("Student", studentSchema);
