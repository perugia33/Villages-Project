const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Tour = new Schema ({

    tour_name: {
        type:String
    },
    tour_summary:{
        type:String
    },
    tour_highlight1:{
        type:String
    },
    tour_highlight2:{
        type:String   
    },

    tour_price:{
        type:Number   
    },


    
})

module.exports =  mongoose.model('Tour', Tour);