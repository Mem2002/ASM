const mongoose = require("mongoose")

var ToySchema = new mongoose.Schema({
    name: String,
    size: String,
    price: String,
    image: String,
    cate: String,
    des: String,
    supp: String
    
}, {
    versionKey: false //optional (to remove _v: 0 when add new data)
})
var ToyModel = mongoose.model('Toy', ToySchema, 'toy')
module.exports = ToyModel