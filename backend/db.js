const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sid:abcdefgh@cluster0.fdvia.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const userSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String
})

const User = new mongoose.model("User", userSchema);
module.exports={
    User
}

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = {
	Account
}


// for an optimal/elegant solution we should add constraints eg: username:{
//     String,
//     minlength8,
//     etc etc
// }