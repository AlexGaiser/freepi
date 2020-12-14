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

test('get post with params', async ()=>{
  const res = await jsonPlaceholder.findPosts({id:1})
  expect(res.status).toBe(200)

  expect(res.data[0].id).toBe(1)
})

test('get todo with params', async()=>{
  const response = await jsonPlaceholder.findTodos({id:1})
  expect(response.status).toBe(200)
  console.log(response.data)
  expect(response.data[0].id).toBe(1)
})

test('users', async()=>{
  const userById = await jsonPlaceholder.getUserById(1)
  const allUsers = await jsonPlaceholder.getAllUsers()
  const findUsers = await jsonPlaceholder.findUsers({name: "Ervin Howell"})
  expect(userById.status).toBe(200)
  expect(userById.data.id).toBe(1)
  expect(allUsers.status).toBe(200)
  expect(allUsers.data.length).toBeGreaterThan(1)
  expect(findUsers.data[0].name).toBe("Ervin Howell")
});