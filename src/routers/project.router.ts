import { Router } from "express"
import { Project } from "../interfaces"
import middlewares from "../middlewares"
import { projectContollers } from "../controllers"

const projectRouter: Router = Router()

projectRouter.post("", middlewares.verifyUserIdBody, projectContollers.createProject)

projectRouter.use("/:id", middlewares.verifyProjectIdParams)

projectRouter.get("/:id")
projectRouter.patch("/:id", middlewares.verifyUserIdBody, projectContollers.updateProject)

export default projectRouter
