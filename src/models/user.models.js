
import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userschema  = new Schema(
    {
        username:{
            type:String,
            required: true,
            unique: true,
            lowercase:true,
            trim : true,
            index: true
        },
        email:{
            type:String,
            required: true,
            unique: true,
            lowercase:true,
            trim : true,
        },
        fullname:{
            type:String,
            required: true,
            trim : true,
            index: true
        },
        avatar:{
            type:String,
            required: true,
        },
        coverimage:{
            type:String,
        },
        watchHistory:[
            {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
        password:{
            type: String,
            required:[true, "Password is required"]
        },
        refreshToken:{
            type: String
        }
    },
    {timestamps : true}     // this is for refering createdAt date and updateAt date
)

userschema.pre("save",async function(next) {

    if(!this.modified("password")) return next;
    
    this.password = bcrypt.hash(this.password ,10)
    next();
})

userschema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password,this.password)
}

userschema.methods.generateAccessToken = function(){
    //short lived access total 
   return jwt.sign(
        {
            _id : this._id,
            email : this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: process.env.ACCESS_TOKEN_EXPIRY}

    )
}

userschema.methods.generateRefreshToken = function(){
    //short lived access total 
   return jwt.sign(
        {
            _id : this._id,
        
        },
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: process.env.REFRESH_TOKEN_EXPIRY}

    )
}

export const user = mongoose.model("user", userschema)