import Student from "../models/student.model.js";

export const getStudents = async (req, res) => {
    //res.send("todos los estudiantes")
    const estudiantes = await Student.find();
    res.status(200).json({"Estudiantes":estudiantes})

};

export const createStudent = async (req, res) => {
 
};

export const deleteStudent = async (req, res) => {
  res.status(200).json("Estudiante Eliminado...")
};

export const updateStudent = async (req, res) => {
     try {
    const { id } = req.params;
    const { nombre, nota1,nota2 } = req.body;

    // Buscar un estudiante por su ID en la base de datos
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Estudiante no encontrado' });
    }
    // Actualizar el los datos del estudiante
    student.nombre = nombre;
    student.nota1 = nota1;
    student.nota2 = nota2;
    await student.save();

    // Enviar una respuesta al cliente
    res.status(200).json({"status":"registro actualizado ok",student});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al actualizar el estudiante' });
  }
};

export const getStudent = async (req, res) => {
    try {
    const { id } = req.params;
    // Buscar un usuario por su ID en la base de datos
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Estidiante no encontrado' });
    }
    // Enviar una respuesta al cliente
    res.status(200).json({student});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ha ocurrido un error al obtener el estudiante' });
    }
};