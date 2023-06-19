import { Request, Response, NextFunction } from "express"
import { devInfoResult } from "../interfaces"
import { client } from "../database"

const verifyDevInfoExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const query: devInfoResult = await client.query(
    'SELECT * FROM "developerInfo" WHERE "developerId" = $1;',
    [req.params.id]
  )
  if (query.rowCount != 0) {
    return res.status(409).json({ message: "Developer infos already exists" })
  }

  return next()
}

export default verifyDevInfoExists
