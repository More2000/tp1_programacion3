const express = require("express");
const empleadoService = require("./empleado.services");

const router = express.Router();

// GET /api/empleado
router.get("/api/empleado", async (req, res) => {
  // #swagger.tags = ['Empleado']
  try {
    const params = JSON.parse(req.headers['params']);
    const paginated = await empleadoService.paginated(params);
    return res.status(200).send(paginated);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// GET /api/empleado/:id
router.get("/api/empleado/:id", async (req, res) => {
  // #swagger.tags = ['Empleado']
  try {
    const empleadoId = req.params.id;
    const empleado = await empleadoService.findOneById(empleadoId);
    return res.status(200).send(empleado);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// POST /api/empleado
router.post("/api/empleado", async (req, res) => {
  // #swagger.tags = ['Empleado']
  try {
    const newEmpleado = req.body;
    const empleado = await empleadoService.save(newEmpleado);
    return res.status(201).send(empleado);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// PUT /api/empleado/:id
router.put("/api/empleado/:id", async (req, res) => {
  // #swagger.tags = ['Empleado']
  try {
    const empleadoId = req.params.id;
    const updatedEmpleado = req.body;
    const empleado = await empleadoService.update(empleadoId, updatedEmpleado);
    return res.status(200).send(empleado);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// DELETE /api/empleado/:id
router.delete("/api/empleado/:id", async (req, res) => {
  // #swagger.tags = ['Empleado']
  try {
    const empleadoId = req.params.id;
    await empleadoService.remove(empleadoId);
    return res.status(200).send("Empleado eliminado correctamente.");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
