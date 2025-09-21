import {Mongoose} from 'mongoose';

const userSchema = new Mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profileImageUrl: {type: String, default: null}
}, {
    timestamps: true,
})

const User = Mongoose.model('User', userSchema);

export default User;