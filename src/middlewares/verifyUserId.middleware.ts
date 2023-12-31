import { NextFunction, Request, Response } from "express"

import { UserResult } from "../interfaces"
import { client } from "../database"

const verifyUserIdBody = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { developerId } = req.body

  if (!developerId) {
    return next()
  }
  const query: UserResult = await client.query('SELECT * FROM "developers" WHERE "id"=$1', [
    developerId
  ])

  if (query.rowCount === 0) {
    return res.status(404).json({ message: "User not found" })
  }

  return next()
}

export default verifyUserIdBody
