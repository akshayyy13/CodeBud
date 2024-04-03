const express = require('express')
const app = express();

const userRoutes = require("./routes/User")
const profileRoutes = require("./routes/Profile")
const paymentsRoutes = require("./routes/Payments")
const courseRoutes = require("./routes/Course")
const contactUsRoute = require("./routes/Contact");
const database = require("./config/database")
const cookie = require("cookie-parser")
const cors =require("cors") //!Search about cors
const {cloudinaryConnect} = require("./config/cloudinary")
const fileUpload = require("express-fileupload")
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');

dotenv.config();
const PORT = process.env.PORT || 4000

database.connect();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    // origin:"https://codebud-frontend-nqkc3iy01-akshays-projects-9be52a00.vercel.app/",
    origin:"*",
    // Access-Control-Allow-Origin: *,
    credentials:true,

}))
app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp"
    })
)
cloudinaryConnect();

app.use("/api/v1/auth",userRoutes)
app.use("/api/v1/profile",profileRoutes)
app.use("/api/v1/course",courseRoutes)
app.use("/api/v1/payment",paymentsRoutes)
app.use("/api/v1/reach", contactUsRoute);
// default
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:'Your Server is Up running...'
    })
})

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})
