import { Request, Response } from "express"
import { User } from "../interfaces"
import { userServices } from "../services"

const createDev = async (req: Request, res: Response): Promise<Response> => {
  console.log(req.body)
  const user: User = await userServices.create(req.body)
  console.log(user)
  return res.status(201).json(user)
}

export default { createDev }
