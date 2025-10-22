
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});



const contentTypes = ['image', 'video', 'article', 'audio'];
const ContentSchema = new Schema({
    title: { type: String, required: true },
    link: { type: String, required: true },
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    type: { type: String, enum: contentTypes, required: true },
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true },
});



const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true },
})




const TagSchema = new Schema({
  title: { type: String, required: true, unique: true }
});



export const UserModel = mongoose.model("User", UserSchema);
export const LinkModel = mongoose.model("Link", LinkSchema);
export const ContentModel = mongoose.model("Content", ContentSchema);
export const TagModel = mongoose.model('Tag', TagSchema);
