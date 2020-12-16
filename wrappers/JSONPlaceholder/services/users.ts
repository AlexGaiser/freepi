import { User } from "../models/User"
import { find, findAll, getById, getBaseFunctions} from "./base.req"

export const users =  (baseURL) => {
  return {
    ...getBaseFunctions<User>('/users')(baseURL)
  }
}