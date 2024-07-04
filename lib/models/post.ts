import { Schema, model, models } from "mongoose";

const postSchema=new Schema({
    email: { type: "string", required: true },
    title:{ type: "string" },
    experience:{ type: "string"},
    description:{ type: "string" },


},{
    timestamps:true,
})

const Post=models.Post || model("Post",postSchema)

export default Post;