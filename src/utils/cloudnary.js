import { v2 as cloudinary } from "cloudinary";
import fs from "fs"
//configure cloudnary

cloudinary.config({ 
    cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
    api_key: process.env.CLOUDNARY_API_SECRET, 
    api_secret: process.env.CLOUDNARY_API_SECRET  // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudnary = async (localFilePath) =>{
    try{
        if(!localFilePath) return null

    } catch(e){
        fs.unlinkSync(localFilePath)
        return null;
    }
}

export {uploadOnCloudnary}