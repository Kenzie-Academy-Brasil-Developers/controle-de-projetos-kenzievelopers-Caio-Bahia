import { NextFunction, Request, Response } from "express"

import { UserResult } from "../interfaces"
import { client } from "../database"

const verifyProjectIdParams = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const query: UserResult = await client.query('SELECT * FROM "projects" WHERE "id"=$1', [
    req.params.id
  ])

  if (query.rowCount === 0) {
    return res.status(404).json({ message: "User not found" })
  }

  return next()
}

export default verifyProjectIdParams
