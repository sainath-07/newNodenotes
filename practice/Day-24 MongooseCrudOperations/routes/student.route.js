import express from "express";
import Student from "../models/students.js";
import mongoose from "mongoose";

const router = express.Router();

// ==========================
// CREATE
// POST /students
// ==========================

router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ==========================
// READ ALL
// GET /students
// ==========================

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();

    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ==========================
// READ ONE
// GET /students/:id
// ==========================

router.get("/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({
      message: "Invalid ID",
    });
  }

  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ==========================
// UPDATE
// PUT /students/:id
// ==========================

router.put("/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({
      message: "Invalid ID",
    });
  }

  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,

      req.body,

      {
        new: true,
      },
    );

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ==========================
// PARTIAL UPDATE
// PATCH /students/:id
// ==========================

router.patch("/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({
      message: "Invalid ID",
    });
  }

  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,

      req.body,

      {
        new: true,
        runValidators: true,
      },
    );

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ==========================
// DELETE
// DELETE /students/:id
// ==========================

router.delete("/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({
      message: "Invalid ID",
    });
  }

  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.json({
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
