import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoschema = new Schema(
    {
        videoFile :{
            type: String, //cloudnary Url
            required: true
        },
        thumbnail :{
            type: String, //cloudnary Url
            required: true
        },
        title :{
            type: String, 
            required: true
        },
        description:{
            type: String, // Url
        },
        duration:{
            type: Number, 
            required: true
        },
        views:{
            type: Number, 
            default: 0
        },
        isPublished:{
            type: Boolean, 
            default: true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "user"
        }
    },
    {timestamps: true}
)

videoschema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model(Vidoe , videoschema)