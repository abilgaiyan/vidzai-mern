const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
 googleId: String,

});

//Create model

mongoose.model('users',userSchema);
