const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema({

 
    name: { type: String, required: true}, //name field is required
    title: String,
    hair_color: {type: String, default: "blonde"}, //default value of the hair color to blonde.
    eye_color: String,
    dob: Date,
    loves: [{type: String}],
    location: String,
    gender: String,
    victims: {type:Number, min: 0} //no vampire will have less than 0 victims
  
});

const Vampire = mongoose.model('Vampire', vampireSchema);





//make this exportable to be accessed in `app.js`
module.exports = Vampire;
