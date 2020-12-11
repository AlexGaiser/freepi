import JSONPlaceholder from "../JSONPlaceholder/JSONPlaceholder";
import { Post } from "../JSONPlaceholder/models/Post";

const jsonPlaceholder = new JSONPlaceholder()

test('get all Todos', async () => {
  const res = await jsonPlaceholder.getAllTodos()
  expect(res.status).toBe(200);
  
});

test('get todos ', async ()=>{
  const res = await jsonPlaceholder.getTodoById(1)
  const errorRes = await jsonPlaceholder.getTodoById(-100000)

  expect(res.status).toBe(200)
  expect(errorRes.status).toBe(404)

})

test('post req post', async ()=>{
  const post:Post = {
    email:'test@test.com',
    name: 'my name',
    body: 'this is the body'
  }
  const res = await jsonPlaceholder.createPost(post)
  expect(res.status).toBe(201)
  expect(res.data).toMatchObject(post)
})