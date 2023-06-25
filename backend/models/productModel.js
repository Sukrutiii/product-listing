const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    },
    comments:[
        {
            type:String,
        }
    ],
    upVotes:{
        type:Number,
        default:0
    },
    upVotes_id:[
        {
            type:String,
        }
    ],
    user_id:{
        type:String,
        required:true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)