import format from "pg-format"
import { client } from "../database"
import { User, UserResult, UserUpdate, Usercreate } from "../interfaces"

const create = async (payload: Usercreate): Promise<User> => {
  const queryFormat: string = format(
    'INSERT INTO "developers" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  )

  const query: UserResult = await client.query(queryFormat)
  return query.rows[0]
}

const retrireve = async (userId: string): Promise<User> => {
  const query: UserResult = await client.query('SELECT * FROM "developers" WHERE "id"=$1', [userId])
  return query.rows[0]
}
const destroy = async (userId: string): Promise<void> => {
  await client.query('DELETE FROM "developers" WHERE "id"=$1', [userId])
}

const update = async (payload: UserUpdate, userId: string): Promise<User> => {
  const queryFormat: string = format(
    'UPDATE "developers" SET (%I) = ROW(%L) WHERE "id"=$1 RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  )
  const query: UserResult = await client.query(queryFormat, [userId])
  return query.rows[0]
}
export default { create, retrireve, destroy, update }
