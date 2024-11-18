import mongoose, {Schema} from "mongoose";

const tweetSchema = mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true,
        trim : true,
        index: true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    content:{
        type: String,
        required: true
    }
},{timestamps: true})

export const tweet = mongoose.model(tweet, tweetSchema)