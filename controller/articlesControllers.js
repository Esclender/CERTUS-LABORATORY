import db from "./project.module.js"

/*GET ALL ARTICLES */

const getAllArticles = (req,res) => {
  const articulos = new db(req)
  
  res.send(articulos.get())
}



/*SEND AN ARTICLE */
const postArticle = (req, res) => {
  try {

    const articles = new db(req)
    articles.post(req.body)


    req.app.db.write()
    res.status(201).send(articles.get())

  } catch (error) {
    res.status(500).send(error)
  }
}


/*GET AN SPECCIFIC ARTICLE BY ID */

const getArtByID = (req,res) => {
  const id = req.params.id
  const articulos = new db(req).get(id)

  if(!articulos){
    res.status(404)
  }

  res.send(articulos)
}


/*UPDATE AN ARTICLE */

const updateArticle = (req,res) => {
  try {
    const id = req.params.id
    const articulos = new db(req)
    articulos.put(id,req.body)

    req.app.db.write()
    res.send(articulos.get())

  } catch (error) {
    console.log(error)
  }
}


/*DELETE AN ARTICLE */

const deleteArticle = (req,res) => {
  try {
    const id = req.params.id
    const articulos = new db(req)
    articulos.delete(id,req)
    
    req.app.db.write()
    res.send(articulos.get())

  } catch (error) {
    console.log(error)
  }
}


export default {
  getAllArticles,
  postArticle,
  getArtByID,
  updateArticle,
  deleteArticle
}