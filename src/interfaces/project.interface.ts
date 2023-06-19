import { QueryResult } from "pg"

interface Project {
  post(): unknown
  id: number
  name: string
  description: string
  repository: string
  startDate: Date
  endDate: Date
  developerID: number | null | undefined
}

type projectCreate = Omit<Project, "id">
type projectUpdate = Partial<projectCreate>
type projectResult = QueryResult<Project>

export { Project, projectCreate, projectUpdate, projectResult }
