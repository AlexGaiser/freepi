import { Comment} from '../models/Comment';
import { getBaseFunctions } from '../services/base.req';

export const comments = (baseURL) => {
  return {
    ...getBaseFunctions<Comment>('/comments')(baseURL)
  }
}