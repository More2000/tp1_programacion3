const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config()
const doc = {
  
  info: {
    title: 'PIII- test',
    description: 'Aplicacion inicial de backend',
  },
   host: 'localhost:'+process.env.PORT
};

const outputFile = '../../swagger-output.json';
const routes = [
  

  "../modules/user/user.routes",
  "../modules/empleado/empleado.routes"
];

swaggerAutogen(outputFile, routes, doc);

