import { nanoid } from "nanoid"
import express from "express"
import services from "../../controller/articlesControllers.js"

const router = express.Router()


/**
* @openapi
* tags:
*  - name: Article
*    description: Api Lista de articulos
*/

/**
 * @openapi
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       properties:
 *         name: 
 *           type: string
 *           example: Lavadora
 *         precio:
 *           type: number
 *           example: 1540
 *         marca:
 *           type: string
 *           example: LG
 *         stock:
 *           type: number
 *           example: 15
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     ArticleRecieve:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: W8wLflLM
 *         name: 
 *           type: string
 *           example: Lavadora
 *         precio:
 *           type: number
 *           example: 1540
 *         marca:
 *           type: string
 *           example: LG
 *         stock:
 *           type: number
 *           example: 15
 */



/**
 * @openapi
 * /articulos:
*    get:
*      tags:
*        - Article
*      summary: Return an article's array
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: array
*               items:
*                    $ref: "#/components/schemas/ArticleRecieve"
*/
router.get("/", services.getAllArticles)


/**
 * @openapi
* /articulos/{articleID}:
*    get:
*      tags:
*        - Article
*      summary: Get an specific article
*      parameters:
*        - name: articleID
*          description: Type the id to search
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
*               type: array
*               items:
*                    $ref: "#/components/schemas/ArticleRecieve"
*/
router.get("/:id", services.getArtByID)

/**
 * @openapi
 * /articulos:
*    post:
*      tags:
*        - Article
*      summary: Create a new article
*      requestBody:
*        description: Create a new articcle by sending the body request
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Article'
*        required: true
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: array
*               items:
*                    $ref: "#/components/schemas/ArticleRecieve"
*/

router.post("/", services.postArticle)


/**
 * @openapi
 * /articulos/{articleID}:
*    put:
*      tags:
*        - Article
*      summary: Update an article
*      parameters:
*        - name: articleID
*          description: Type the id to update 
*          in: path
*          required: true
*          schema:
*            type: string
*      requestBody:
*        description: Update an article by using its ID
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Article'
*        required: true
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: array
*               items:
*                    $ref: "#/components/schemas/ArticleRecieve"
*/
router.put("/:id", services.updateArticle)

/**
 * @openapi
 * /articulos/{articleID}:
*    delete:
*      tags:
*        - Article
*      summary: delete an article
*      parameters:
*        - name: articleID
*          description: Type the article id to delete 
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
*               type: array
*               items:
*                    $ref: "#/components/schemas/ArticleRecieve"
*/
router.delete("/:id",services.deleteArticle)

export default router