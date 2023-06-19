import { Request, Response } from "express"
import { devInfo, devInfocreate } from "../interfaces"
import devinfoServices from "../services/devinfo.services"

const createDevInfo = async (req: Request, res: Response): Promise<Response> => {
  const payload: devInfocreate = { ...req.body, developerID: req.params.id }
  const devInfo: devInfo = await devinfoServices.create(payload)

  return res.status(201).json(devInfo)
}

export default { createDevInfo }
