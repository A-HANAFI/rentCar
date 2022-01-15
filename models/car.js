const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    code: {
        type : String,
        required : true
    },
    matricule: {
        type : String,
        required : true
    },
    model: {
        type : String,
        required : true
    },
    prix: {
        type : String,
        required : true
    },
    categorie: {
        type : String,
        required : true
    },
    nombre_disponibles: {
        type : Number,
        required : true
    },
    image_url: {
        type: String,
        required : true
    },
    description:{
        type: String,
        required : true
    },
    title: {
        type : String,
        required: true
    }

});
const car = module.exports = mongoose.model('car', carSchema);