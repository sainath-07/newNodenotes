import { ObjectId } from "mongodb";
import { getDB } from "../config/db.js";

// Create Student

export const createStudent = async (req, res) => {
  try {
    const collection = getDB().collection("studentdb");

    const result = await collection.insertOne(req.body);

    res.status(201).json({
      success: true,
      message: "Student Created",

      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Students

export const getStudents = async (req, res) => {
  try {
    const collection = getDB().collection("studentdb");

    const students = await collection.find().toArray();

    res.status(200).json({
      success: true,

      data: students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// Get Single Student

export const getStudent = async (req, res) => {
  try {
    const collection = getDB().collection("studentdb");

     if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid  student ID" });
    }

    const student = await collection.findOne({
      _id: new ObjectId(req.params.id),
    });

    if (!student) {
      return res.status(404).json({
        success: false,

        message: "Student Not Found",
      });
    }

    res.json({
      success: true,

      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// Update Student
// patch method.
export const updateStudent = async (req, res) => {
  try {
    const collection = getDB().collection("studentdb");

     if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid  student ID" });
    }

    const result = await collection.updateOne(
      { _id: new ObjectId(req.params.id) },

      { $set: req.body },
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        success: false,

        message: "Student Not Found",
      });
    }

    res.json({
      success: true,

      message: "Student Updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// Update Student
// put method.
export const replaceStudent = async (req, res) => {
  try {
    const collection = getDB().collection("studentdb");

    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid  student ID" });
    }

    const result = await collection.replaceOne(
      { _id: new ObjectId(req.params.id) },
      req.body,
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        success: false,

        message: "Student Not Found",
      });
    }

    res.json({
      success: true,

      message: "Student Updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// Delete Student
export const deleteStudent = async (req, res) => {
  try {
    const collection = getDB().collection("studentdb");

     if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid  student ID" });
    }

    const result = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,

        message: "Student Not Found",
      });
    }

    res.json({
      success: true,

      message: "Student Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};
