const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Client = new Schema ({

    first_name: {
        type:String
    },
    last_name:{
        type:String
    },
    email:{
        type:String
    },
    country_of_residence:{
        type:String   
    }
})

module.exports =  mongoose.model('Client', Client);