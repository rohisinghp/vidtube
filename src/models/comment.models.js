import mongoose,{mongoose, Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentSchema = mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true,
        trim : true,
        index: true
    },
    content:{
        type: String,
        required: true
    },
    video:{
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "owner"
    }
}
  
)

commentSchema.plugin(mongooseAggregatePaginate)

export const comment = mongoose.model(comment, commentSchema);