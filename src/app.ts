import express, { Application } from "express"
import "dotenv/config"
import userRouter from "./routers/user.router"

const app: Application = express()
app.use(express.json())
app.use("/developers", userRouter)

export default app
