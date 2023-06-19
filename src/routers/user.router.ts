import { Router } from "express"
import { userControllers } from "../controllers"
import middlewares from "../middlewares"
import devinfoControllers from "../controllers/devinfo.controllers"

const userRouter: Router = Router()
userRouter.post("", middlewares.uniqueEmail, userControllers.createDev)

userRouter.use("/:id", middlewares.verifyUserIdParams)

userRouter.get("/:id", userControllers.retrieveDev)
userRouter.delete("/:id", userControllers.destroyDev)
userRouter.patch("/:id", middlewares.uniqueEmail, userControllers.updateDev)
userRouter.post("/:id/infos", middlewares.verifyDevInfoExists, devinfoControllers.createDevInfo)

export default userRouter
