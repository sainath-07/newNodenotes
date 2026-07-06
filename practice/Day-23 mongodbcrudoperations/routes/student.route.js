import express from "express";

import {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  replaceStudent,
} from "../controllers/student.controller.js";
import { validateStudent } from "../middleware/validation.js";

const router = express.Router();

router.post("/", validateStudent, createStudent);

router.get("/", getStudents);

router.get("/:id", getStudent);

router.put("/:id", replaceStudent);
router.patch("/:id", updateStudent);


router.delete("/:id", deleteStudent);

export default router;
