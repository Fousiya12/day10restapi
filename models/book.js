const mongoose = require('mongoose');

const bookschema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    publisher:{
        name:{
            type:String,
            require:true},
            city:{
                zipcode:{
                type:String,
                require:true
            },
            cityname:{
                type:String,
                require:true
            }
        }
    }
});

module.exports = mongoose.model('book1',bookschema);