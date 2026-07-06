import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    course: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
