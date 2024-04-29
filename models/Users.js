const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {type:String},
    sku: {type:String},
    qty: {type:Number},
    price: {type:Number},
    unit: {type:Number},
    type:{type:String},
})

const UserModel = mongoose.model("stock", UserSchema)

module.exports = UserModel