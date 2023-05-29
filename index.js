import {Low} from "lowdb"
import 'dotenv/config'
import express, { request, response } from "express"
import cors from "cors"
import morgan from "morgan";
import {JSONFile }from "lowdb/node"
import router from "./src/routes/articles.js"
import swaggerDocsV1 from "./src/routes/swagger.js";

const PORT = process.env.PORT || 10801;

const db = new Low(new JSONFile('db.json'),{})
db.read()

const app = express()
app.db = db

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', `http://localhost:${PORT}`); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use("/articulos",router)


app.listen(PORT, (req, resp) => {
  console.log(`EALS: Server running in port ${PORT}`)
  swaggerDocsV1(app,PORT)
})