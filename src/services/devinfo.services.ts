import format from "pg-format"
import { devInfo, devInfoResult, devInfocreate } from "../interfaces"
import { client } from "../database"

const create = async (payload: devInfocreate): Promise<devInfo> => {
  const queryFormat: string = format(
    'INSERT INTO "developerInfo" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  )
  const query: devInfoResult = await client.query(queryFormat)
  return query.rows[0]
}

export default { create }
