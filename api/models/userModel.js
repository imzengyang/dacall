let mongoose = require('mongoose')

let Schema = mongoose.Schema

let UserSchema = new Schema({
    name:{
        type:String,
        required:'Kindly enter the name of the user'
    },
    create_at:{
        type:Date,
        default: Date.now
    },
    status:{
        type:[
            {
                type:String,
                enum:['pending','active']
            }
        ],
        default:['pending']
    }

})

module.exports = mongoose.model('User',UserSchema)