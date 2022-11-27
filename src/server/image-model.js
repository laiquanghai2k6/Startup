const mongoose = require('mongoose')

const ImageSchema = mongoose.Schema({
    image:{
        data:String,
        contentType:String
    }
})

module.exports = ImageModel = mongoose.model('imageModel',ImageSchema)