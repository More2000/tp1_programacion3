const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  firtname: String,
  lastname: String,
  email: String,
  domicilio:String,
  celular:String,
  documento:String,
  rol:String,
  area:String,
});

const usuario= mongoose.model("Usuario", userSchema);

module.exports = usuario;
