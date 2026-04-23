import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
// ... top imports stay the same ...

// middlewares
app.use(express.json())

// ... top imports stay the same ...

// middlewares
app.use(express.json())

const allowedOrigins = [
  'http://localhost:5173', 
  'http://localhost:5174', 
  'https://prescripto-hospital-management-system.vercel.app',      // ✅ Your Vercel Patient Frontend
  'https://prescripto-hospital-management-system-c29o.vercel.app' // ✅ Your Vercel Admin Panel
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));


// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))