import JSONPlaceholder from "../JSONPlaceholder/JSONPlaceholder";
import { Post } from "../JSONPlaceholder/models/Post";

describe('JsonPlaceholder', () => {

  // Testing Constants
  const jsonPlaceholder = new JSONPlaceholder();
  const success = 200;
  const notFound = 404;
  const createdSuccessfully = 201;
  
  test('get all Todos', async () => {
    const res = await jsonPlaceholder.getAllTodos()
    expect(res.status).toBe(success);
    
  });
  
  test('get todos ', async ()=>{
    const res = await jsonPlaceholder.getTodoById(1)
    const errorRes = await jsonPlaceholder.getTodoById(-100000)
  
    expect(res.status).toBe(success)
    expect(errorRes.status).toBe(notFound)
  
  });
  
  test('post req post', async ()=>{
    const post:Post = {
      userId: 5,
      id: 101,  // 100 posts are built in, new creations start at 101
      title: "This is the Title",
      body: 'This is the body'
    }

    const res = await jsonPlaceholder.createPost(post)
    expect(res.status).toBe(createdSuccessfully)
    expect(res.data).toMatchObject(post)
  });

  test('should get post by id', async() => {
    const postId: number = 5
    const post:Post = {
      userId: 1,
      id: postId,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    };

    const res = await jsonPlaceholder.getPostById(postId)
    expect(res.status).toBe(success);
    expect(res.data).toMatchObject(post);
  })

});