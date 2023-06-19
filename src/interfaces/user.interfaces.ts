import { QueryResult } from "pg"

interface User {
  id: number
  name: string
  email: string
}

type Usercreate = Omit<User, "id">
type UserUpdate = Partial<Usercreate>
type UserRead = Array<User>
type UserResult = QueryResult<User>

export { User, Usercreate, UserUpdate, UserRead, UserResult }
