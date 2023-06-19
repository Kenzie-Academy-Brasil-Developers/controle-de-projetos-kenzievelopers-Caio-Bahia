import format from "pg-format"
import { client } from "../database"
import { User, UserResult, Usercreate } from "../interfaces"

const create = async (payload: Usercreate): Promise<User> => {
  //   console.log(payload)
  const queryFormat: string = format(
    'INSERT INTO "developers" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  )

  const query: UserResult = await client.query(queryFormat)
  return query.rows[0]
}

export default { create }
