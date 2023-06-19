import { QueryResult } from "pg"

interface devInfo {
  id: number
  developerSince: Date
  preferredOS: string
  developerId: number
}

type devInfocreate = Omit<devInfo, "id">
type devInfoResult = QueryResult<devInfo>

export { devInfo, devInfocreate, devInfoResult }
