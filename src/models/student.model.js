import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
   {
     nombre: { type: String, required: true, unique: true },
     nota1: { type: Number, required: true },
     nota2: { type: Number, required: true },
  }  
);

export default mongoose.model("students", studentSchema);