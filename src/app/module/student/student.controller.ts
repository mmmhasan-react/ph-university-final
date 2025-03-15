import { Request, Response } from "express";
import { studentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { students: studentData } = req.body;

    const result = await studentServices.createStudentIntoDb(studentData);
    res.status(200).json({
      success: true,
      message: "student created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
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
