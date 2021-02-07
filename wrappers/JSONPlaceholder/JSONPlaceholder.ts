import { todos } from './services/todos';
import { users } from './services/users';
import { posts } from './services/posts';
import { photos } from './services/photos';
import { comments } from './services/comments';
import { albums } from './services/albums';

class JSONPlaceholder {
  private baseURL = 'https://jsonplaceholder.typicode.com';
  public todos = todos({ url: this.getBaseURL() });
  public users = users({ url: this.getBaseURL() });
  public posts = posts({ url: this.getBaseURL() });
  public photos = photos({ url: this.getBaseURL() });
  public comments = comments({ url: this.getBaseURL() });
  public albums = albums({ url: this.getBaseURL() });

  public getBaseURL(): string {
    return this.baseURL;
  }
}
export default JSONPlaceholder;
