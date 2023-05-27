import {Low} from "lowdb"
import express, { request, response } from "express"
import cors from "cors"
import morgan from "morgan";
import {JSONFile }from "lowdb/node"
import router from "./routes/articles.js"
import swaggerDocsV1 from "./routes/swagger.js";

const PORT = process.env.PORT || 10801

const db = new Low(new JSONFile('db.json'),{})
db.read()

const app = express()
app.db = db

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use("/articulos",router)


app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
  swaggerDocsV1(app,PORT)
})