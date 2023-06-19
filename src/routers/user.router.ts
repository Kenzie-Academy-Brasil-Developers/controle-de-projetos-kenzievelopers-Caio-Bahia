import { Router } from "express"
import { userControllers } from "../controllers"

const userRouter: Router = Router()
userRouter.post("", userControllers.createDev)

userRouter.get("/:id")
userRouter.delete("/:id")
userRouter.patch("/:id")
userRouter.post("/:id/infos")

export default userRouter
