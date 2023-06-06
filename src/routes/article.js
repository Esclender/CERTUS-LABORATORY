import express from "express"
import articleServices from "../controllers/article.controller.js";
import validate from "../middleware/validateJwt.js"

const Router = express.Router()


/**
* @openapi
* tags:
*  - name: vuelos
*    description: Endpoints para obtener todos los vuelos que esten disponibles para diferentes destinos.
*/

/**
 * @openapi
 * components:
 *   schemas:
 *     vuelos:
 *       type: object
 *       properties:
 *         destination: 
 *           type: string
 *           example: Argentina
 *         origin:
 *           type: String
 *           example: Perú
 *         roundtrip:
 *           type: Boolean
 *           example: false
 *         aboarding:
 *           type: string
 *           format: date
 *           example: "2023-06-01T10:30:00Z" 
 *         currency:
 *           type: String
 *           example: USD
 *         price:
 *           type: Number
 *           example: 250.60
 *         arrival:
 *           type: string
 *           format: date
 *           example: "2023-06-02T12:30:00Z"
 */


/**
 * @openapi
 * components:
 *   schemas:
 *     vuelosGET:
 *       type: object
 *       properties:
 *         destination: 
 *           type: string
 *           example: Argentina
 *         origin:
 *           type: String
 *           example: Perú
 *         roundtrip:
 *           type: Boolean
 *           example: false
 *         exit:
 *           type: string
 *           format: date
 *           example: "2023-06-01T10:30:00Z" 
 *         currency:
 *           type: String
 *           example: USD
 *         price:
 *           type: Number
 *           example: 250.60
 *         arrival:
 *           type: string
 *           format: date
 *           example: "2023-06-02T12:30:00Z"
 *         id: 
 *           type: string
 *           example: 6478b0eaa559cc7884a58952
 */


/**
 * @openapi
 * /vuelos:
*    get:
*      tags:
*        - vuelos
*      summary: Devuelve un array de vuelos
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: array
*               items:
*                    $ref: "#/components/schemas/vuelosGET"
*/

Router.get("/", [validate], articleServices.getArticle)

/**
 * @openapi
 * /vuelos/{id}:
*    get:
*      tags:
*        - vuelos
*      summary: Obtener un vuelo en específico.
*      parameters:
*        - name: id
*          description: Ingresa el id del vuelo
*          in: path
*          required: true
*          schema:
*            type: string
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*                $ref: "#/components/schemas/vuelosGET"
*/

Router.get("/:id",[validate], articleServices.getArticlebyid)

/**
 * @openapi
 * /vuelos:
*    post:
*      tags:
*        - vuelos
*      summary: Crear un vuelo
*      requestBody:
*        description: Los parametros {destino,origen,tarifa, llegada, Salida} son OBLIGATORIOS
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/vuelos'
*        required: true
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*                type: object
*                properties:
*                  messagge:
*                    type: String
*                    example: Vuelo Creado
*                  data:
*                    type: object
*                    $ref: "#/components/schemas/vuelosGET"
*/
Router.post("/",[validate], articleServices.postArticle)


/**
 * @openapi
 * /vuelos/{id}:
*    put:
*      tags:
*        - vuelos
*      summary: Actualizar un vuelo.
*      parameters:
*        - name: id
*          description: Ingresa el id del vuelo
*          in: path
*          required: true
*          schema:
*            type: string
*      requestBody:
*        description: Parametro a actualizar
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/vuelos'
*        required: true
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*                type: object
*                properties:
*                  messagge:
*                    type: String
*                    example: Info del vuelo actualizada
*/
Router.put("/:id",[validate], articleServices.putArticle)

/**
 * @openapi
 * /vuelos/{id}:
*    delete:
*      tags:
*        - vuelos
*      summary: Borrar un vuelo
*      parameters:
*        - name: id
*          description: Escribe el id del vuelo
*          in: path
*          required: true
*          schema:
*            type: string
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*                type: object
*                properties:
*                  messagge:
*                    type: String
*                    example: Vuelo cancelado
*/
Router.delete("/:id",[validate], articleServices.deleteArticle)

export default Router