import mongoose from "mongoose"

class db {
  constructor(sche){
    this.data = sche
  }

  async get(id){
    if(id != null){
      const finded = this.data.findById(id)
      return finded
    }else{
      const data = await this.data.find({})
      return data
    }
  }

  post(body){
    const newReserva = this.data(body)
    
    return newReserva.save()
  }

  put(id,body){
    const updateReserva = this.data.updateOne(
      {
        "_id":`${id}`
      },
      {
          "$set": {
              ...body
          }
      }
    )

    return updateReserva
  }

  delete(id){
    const deletedOne = this.data.deleteOne({"_id":`${id}`})
    return deletedOne
  }

}

export default db