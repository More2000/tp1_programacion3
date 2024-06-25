const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empleadoSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  mail: String,
  dni:String,
  celular:String,
  domicilio:String,
  departamento:String,
  cargo:String,
  antiguedad:String,
  obrasocial:String
});

const empleado= mongoose.model("Empleado", empleadoSchema);

module.exports = empleado;
