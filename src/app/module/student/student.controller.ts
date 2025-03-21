import { Request, Response } from "express";
import { studentServices } from "./student.service";
import { StudentValidationSchema } from "./student.joi";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { students: studentData } = req.body;
    //joi
    const value = await StudentValidationSchema.validateAsync(studentData);

    // const result = await studentServices.createStudentIntoDb(studentData);
    res.status(200).json({
      success: true,
      message: "student created successfully, validation with joi",
      data: value,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "An error occurred, student not created",
      data: { err },
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDb();
    res.status(200).json({
      success: true,
      message: "get all students successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.studentId;
    const result = await studentServices.getSingleStudentFromDb(id);
    res.status(200).json({
      success: true,
      message: "get single student successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
