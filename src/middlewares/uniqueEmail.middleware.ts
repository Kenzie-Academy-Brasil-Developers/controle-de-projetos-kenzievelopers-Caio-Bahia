import { NextFunction, Request, Response, response } from "express"
import { UserResult } from "../interfaces"
import { client } from "../database"

const uniqueEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { email } = req.body

  if (!email) return next()

  const query: UserResult = await client.query('SELECT * FROM "developers" WHERE "email" = $1;', [
    email
  ])

  if (query.rowCount != 0) {
    return res.status(409).json({ mesage: "Email already exists" })
  }

  return next()
}

export default uniqueEmail
