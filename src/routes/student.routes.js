import { Router } from "express";
 import {
   createStudent,
   deleteStudent,
   getStudent,
   getStudents,
   updateStudent,
} from "../controllers/student.controllers.js";

const router = Router();

router.get("/", (req,res)=>{
    res.json("Todos los estudiantes")
});

router.post("/", createStudent);

router.get("/:id", getStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

export default router;