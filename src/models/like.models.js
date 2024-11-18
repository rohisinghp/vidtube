import mongoose,{Schema} from "mongoose";
import { comment } from "./comment.models";

const likeSchema = mongoose.Schema({
    id:{
        type: String,
        required : true,
        unique: true,
        trim: true ,
        index: true
    },
    comment:{
        type: Schema.Types.ObjectId,
        ref: "comment"
    },
    video:{
        type: Schema.Types.ObjectId,
        ref: "video"
    },
    likedBy:{
        type: Schema.Types.ObjectId,
        ref: "like"
    },
    tweet:{
        type: Schema.Types.ObjectId,
        ref: "tweet"
    }
    
},
{timestamp: true})

export const like = mongoose.model(like,likeSchema)