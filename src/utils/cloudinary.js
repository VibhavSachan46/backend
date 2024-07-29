import { v2 as cloudinary} from "cloudinary";
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
});

const uploadOnCloudinary = async(localFilePath) => {
    try {

        if(!localFilePath) return null


        // Upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        // File has been uploaded successfully
        console.log("File uplaoded successfully", response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)  // removbe the locally saved temporary file as the uplaod operation got failed
        return null
    }
}

export {uploadOnCloudinary}


// ptHxjuzl_BkUGM71b1qQplHzrXw