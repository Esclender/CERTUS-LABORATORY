import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  nameArticle:{
    type:String,
    required: [true, "The article must have a name"]
  },
  price:{
    type:Number,
    required: [true, "The article must have a price"]
  }
})

articleSchema.methods = {
  toJson: (schema) => {
    const {__v, _id, ...article} = schema.toObject()
    article.id = _id
    return article
  }
}

const article = mongoose.model("articles", articleSchema)

export default article