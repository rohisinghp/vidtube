import mongoose, {Schema} from "mongoose";
import { Video } from "./video.models.js";

playlistSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true,
        trim : true,
        index: true
    },
    name:{
        type: String,
        required : true 
    },
    description:{
        type: String,
        required : true 
    },
    videos:[{
        type: Schema.Types.ObjectId,
        ref : "Video" 
    }]
},
{timestamps: true}
)

export const playList=mongoose.model(playList,playlistSchema);