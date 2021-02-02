import { Post } from "../models/Post"
import { find, findAll, getById, getBaseFunctions, createNested} from "./base.req"

export const posts =  (baseURL) => {
  const nestedPaths: string[] = ["/comments"];
  return {
    ...getBaseFunctions<Post>('/posts')(baseURL),
    createComment: createNested<Post>('/posts')(baseURL.url)(nestedPaths[0]),
  }
}
