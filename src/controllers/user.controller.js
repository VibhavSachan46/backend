import { asyncHandler } from "../utils/asyncHandler.js"

const registerUser = asyncHandler(async (req, res) => {
    console.log("register started");
    res.status(400).json({
        message: "OK"
    })
    
})


export {registerUser}