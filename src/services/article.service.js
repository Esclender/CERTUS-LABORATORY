import articleSchema from "../models/articleSchema.js"
import db from "../database/project.module.js"
import BaseException from "../exceptions/baseExceptions.module.js"

const model = new db(articleSchema)

async function getArticle(){
  const rst = await model.get()
  const mapped = await rst.map(schema => schema.toJson(schema))
  return await mapped
}

async function getArticlebyid(id){
  const rst = await model.get(id)
  if(!rst) throw new BaseException("Article not found", 404);
  return rst.toJson(rst)
  
}

async function postArticle(body){
  const rst = await model.post(body)
  return await rst.toJson(rst)
}

async function putArticle(id, body){
  const rst = await model.put(id,body)
  if(!rst.modifiedCount) throw new BaseException("Article not found", 404);
  return rst
}

async function deleteArticle(id){
  const rst = await model.delete(id)
  if(!rst.deletedCount) throw new BaseException("Article not found", 404);
  return rst
}

export default {
  getArticle,
  postArticle,
  putArticle,
  deleteArticle,
  getArticlebyid
}