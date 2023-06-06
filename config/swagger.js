import swaggerUi from "swagger-ui-express"
import swaggerJSDoc from "swagger-jsdoc"

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Librerias APIs - CERTUS',
      description:"Demo de librerias de Ventas API",
      version: '1.0.0',
    },
    servers:[
      {
        url: `https://dockerguia1.azurewebsites.net`
      }
    ]
  },
  apis: ['./src/routes/*.js']
};



const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  console.log(`Your docs are in port ${port}` );
}


export default swaggerDocs
