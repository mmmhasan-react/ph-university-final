import express from "express";
import { studentControllers } from "./student.controller";

const router = express.Router();

router.post("/create-student", studentControllers.createStudent);
router.get("/getAllStudents", studentControllers.getAllStudents);
router.get("/getSingleStudent/:studentId", studentControllers.getSingleStudent);

export const studentRouter = router;
