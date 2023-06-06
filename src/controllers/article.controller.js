import articleServices from "../services/article.service.js"


async function getArticle(req,res){
  try {

    const rst = await articleServices.getArticle()
    return await res.json(rst)

  } catch (error) {
    res.status(404).json({
      message:error
    })
  }
}

async function getArticlebyid(req,res){
  try {
    const { id } = req.params
    const rst = await articleServices.getArticlebyid(id)
    return await res.json(rst)

  } catch (error) {
    if(error.cause.status){
      return res.status(error.cause.status).json({
        message:error.message
      })
    }

    res.status(500).json({
      message:error
    })
  }
}

async function postArticle(req,res){
  try {
    
    const rst = await articleServices.postArticle(req.body)
    return await res.status(201).json({
      message:"Article creado",
      data:rst
    })

  } catch (error) {
    console.log(error)
    res.status(400).json({
      message:error
    })
  }
}

async function putArticle(req,res){
  try {
    const id = req.params.id
    await articleServices.putArticle(id,req.body)
    return await res.json({
      message:"Info del Vuelo Actualizada"
    })

  } catch (error) {
    console.log(error)
    if(error.cause.status){
      return res.status(error.cause.status).json({
        message:error.message
      })
    }

    res.status(500).json({
      message:error
    })
  }
}

async function deleteArticle(req,res){
  try {
    const id = req.params.id
    await articleServices.deleteArticle(id)
    return await res.json({
      message:"Vuelo cancelado"
    })

  } catch (error) {
    if(error.cause.status){
      return res.status(error.cause.status).json({
        message:error.message
      })
    }

    res.status(500).json({
      message:error
    })
  }
}

export default {
  getArticle,
  postArticle,
  putArticle,
  getArticlebyid,
  deleteArticle
}