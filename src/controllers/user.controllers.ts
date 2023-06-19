import { Request, Response } from "express"
import { User } from "../interfaces"
import { userServices } from "../services"

const createDev = async (req: Request, res: Response): Promise<Response> => {
  const user: User = await userServices.create(req.body)

  return res.status(201).json(user)
}

const retrieveDev = async (req: Request, res: Response): Promise<Response> => {
  const user: User = await userServices.retrireve(req.params.id)
  return res.status(201).json(user)
}
const destroyDev = async (req: Request, res: Response): Promise<Response> => {
  await userServices.destroy(req.params.id)
  return res.status(204).json()
}

export default { createDev, retrieveDev, destroyDev }
