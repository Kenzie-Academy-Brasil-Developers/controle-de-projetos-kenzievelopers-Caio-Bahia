import { Router } from "express"
import { userControllers } from "../controllers"
import middlewares from "../middlewares"

const userRouter: Router = Router()
userRouter.post("", middlewares.uniqueEmail, userControllers.createDev)

userRouter.get("/:id")
userRouter.delete("/:id")
userRouter.patch("/:id", middlewares.uniqueEmail)
userRouter.post("/:id/infos")

export default userRouter
