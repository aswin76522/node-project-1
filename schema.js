const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId

const User = new Schema({
    username:String,
    age:Number
    city:String

});
const MyUser = mongoose.model('User',UserSchema);
module.exports = MyUser