import { Router } from "express"
import { userControllers } from "../controllers"
import middlewares from "../middlewares"

const userRouter: Router = Router()
userRouter.post("", middlewares.uniqueEmail, userControllers.createDev)

userRouter.use("/:id", middlewares.verifyUserIdParams)

userRouter.get("/:id", userControllers.retrieveDev)
userRouter.delete("/:id", userControllers.destroyDev)
userRouter.patch("/:id", middlewares.uniqueEmail)
userRouter.post("/:id/infos")

export default userRouter
