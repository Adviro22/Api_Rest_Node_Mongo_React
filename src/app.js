import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import studenRoutes from "./routes/student.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.get("/", (req, res) =>{
    res.send("Pagina Principal");
});

//Autentificacion
//rutas de estudiantes

app.use("/api/students", studenRoutes);

export default app;