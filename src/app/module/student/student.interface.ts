export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
};
export type LocalGurdian = {
  name: string;
  occupation: string;
  address: string;
  contactNumber: string;
};
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type Student = {
  id: string;
  name: UserName;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  avatar: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  presentAddress: string;
  permanentAddress: string;
  guardian: Gurdian;
  localGurdian: LocalGurdian;
  profileImage: string;
  isActive: "active" | "inActive";
};
