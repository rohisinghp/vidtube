import mongoose ,{Schema} from "mongoose";

const subscriptionSchema = mongoose.Schema({
    subscriber:{
        type : Schema.Types.ObjectId,
        ref: "user"
    },
    channel:{
        type: Schema.Types.ObjectId,
        ref: "user"
    },

},
{ timestamps: true})