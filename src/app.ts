import express, { Application } from "express"
import "dotenv/config"
import userRouter from "./routers/user.router"
import projectRouter from "./routers/project.router"

const app: Application = express()
app.use(express.json())

app.use("/developers", userRouter)
app.use("/projects", projectRouter)

export default app
