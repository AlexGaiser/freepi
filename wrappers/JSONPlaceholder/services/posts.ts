import { Post } from "../models/Post"
import { find, findAll, getById, getBaseFunctions} from "./base.req"

export const posts =  (baseURL) => {
  return {
    ...getBaseFunctions<Post>('/posts')(baseURL)
  }
}