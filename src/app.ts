import express, { Application } from "express";
import cors from "cors";
import { studentRouter } from "./app/module/student/student.route";
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/students", studentRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
