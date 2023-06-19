import format from "pg-format"
import { client } from "../database"
import { Project, projectCreate, projectResult, projectUpdate } from "../interfaces"

const create = async (payload: projectCreate): Promise<Project> => {
  const queryFormat: string = format(
    'INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  )
  const query: projectResult = await client.query(queryFormat)
  return query.rows[0]
}

const update = async (payload: projectUpdate, userId: string): Promise<Project> => {
  const queryFormat: string = format(
    'UPDATE "projects" SET (%I) = ROW(%L) WHERE "id"=$1 RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  )
  const query: projectResult = await client.query(queryFormat, [userId])
  return query.rows[0]
}

export default { create, update }
