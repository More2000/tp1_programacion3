const empleadoModel = require("../../models/empleado");
const pager = require("../../utils/pager");

async function findOneById(_id) {
  return await empleadoModel.findById(_id).populate("usuario").exec();
}

async function save(empleado) {
  let _empleado = new empleadoModel(empleado);
  return await _empleado.save();
}

async function paginated(params) {
  let perPage = params.perPage ? params.perPage : 10,
    page = Math.max(0, params.page),
    filter = params.filter ? params.filter : {},
    sort = params.sort ? params.sort : {};

  let count = await empleadoModel.countDocuments(filter);
  let data = await empleadoModel.find(filter)
    .limit(perPage)
    .skip(perPage * page)
    .sort(sort)
    .populate("usuario")
    .exec();

  return pager.createPager(page, data, count, perPage);
}

async function update(id, updatedEmpleado) {
  return await empleadoModel.findByIdAndUpdate(id, updatedEmpleado, { new: true }).exec();
}

async function remove(id) {
  return await empleadoModel.findByIdAndDelete(id).exec();
}

module.exports = { findOneById, save, paginated, update, remove };
