import JSONPlaceholder from "../JSONPlaceholder/JSONPlaceholder";
import { Post } from "../JSONPlaceholder/models/Post";

describe('JsonPlaceholder', () => {

  // Testing Constants
  const jsonPlaceholder = new JSONPlaceholder();
  const success = 200;
  const notFound = 404;
  const createdSuccessfully = 201;
  //const 
  
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
      email:'test@test.com',
      name: 'my name',
      body: 'this is the body'
    }
    const res = await jsonPlaceholder.createPost(post)
    expect(res.status).toBe(createdSuccessfully)
    expect(res.data).toMatchObject(post)
  });

});