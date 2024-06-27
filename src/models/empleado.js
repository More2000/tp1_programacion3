const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empleadoSchema = new Schema({
  nombre: String,
  apellido: String,
  mail: String,
  dni: String,
  celular: String,
  domicilio: String,
  departamento: String,
  cargo: String,
  antiguedad: String,
  obrasocial: String,
  // RELACIÓN CON USUARIO
  usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true }
});

const empleado = mongoose.model("Empleado", empleadoSchema);

module.exports = empleado;
