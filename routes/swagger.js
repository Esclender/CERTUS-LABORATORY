import swaggerUi from "swagger-ui-express"
import swaggerJSDoc from "swagger-jsdoc"

const PORT = process.env.PORT || 10801

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
        url: `http://localhost:${PORT}`
      }
    ]
  },
  apis: ['./routes/articles.js']
};



const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  console.log(`Your docs are in http://localhost:${port}/api-docs` );
}


export default swaggerDocs
