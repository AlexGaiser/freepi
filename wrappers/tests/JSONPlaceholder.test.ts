import { post } from "../../services/requests";
import JSONPlaceholder from "../JSONPlaceholder/JSONPlaceholder";
import { Post } from "../JSONPlaceholder/models/Post";
import { Todo } from "../JSONPlaceholder/models/Todo";
import { User } from "../JSONPlaceholder/models/User";

const jsonPlaceholder = new JSONPlaceholder()

test('get all Todos', async () => {
  const res = await jsonPlaceholder.todos.findAll()
  expect(res.status).toBe(200);
  
});

test('get todos ', async ()=>{
  const res = await jsonPlaceholder.todos.getById(1)
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
  const res = await jsonPlaceholder.posts.create(post)
  expect(res.status).toBe(201)
  expect(res.data).toMatchObject(post)
})

test('get post with params', async ()=>{
  const res = await jsonPlaceholder.findPosts({id:1})
  expect(res.status).toBe(200)

  expect(res.data[0].id).toBe(1)
})

test('get todo with params', async()=>{``
  const response = await jsonPlaceholder.todos.find({id:1})
  expect(response.status).toBe(200)
  console.log(response.data)
  expect(response.data[0].id).toBe(1)
})

test('create todo', async ()=>{
  const todo:Todo = {
    userId: 1,
    title: 'test todo title',
    completed:false,
  }
  const response = await jsonPlaceholder.todos.create(todo);
  expect(response.status).toBe(201);
  expect(response.data).toMatchObject(todo);
})

test('users', async()=>{
  const user:User = {
    username:"test user",
    name: "name namington",
    email:"mail@mail.com",
    address: {
      street:"fake street",
      city:"metropolis",
      zipcode:"11111"
    },
    geo: {
      lat: "111111",
      lng: "1111111",
    },
    phone:"1234567890",
    website: "www.web.com",
    company: {
      name: "Coolcompany, Inc",
      catchPhrase: "The coolest company",
      bs: "test bs"
    }
  }
  const userById = await jsonPlaceholder.getUserById(1)
  const allUsers = await jsonPlaceholder.getAllUsers()
  const findUsers = await jsonPlaceholder.findUsers({name: "Ervin Howell"})
  const createdUser = await jsonPlaceholder.users.create(user)
  expect(userById.status).toBe(200)
  expect(userById.data.id).toBe(1)
  expect(allUsers.status).toBe(200)
  expect(allUsers.data.length).toBeGreaterThan(1)
  expect(findUsers.data[0].name).toBe("Ervin Howell")
  expect(createdUser.data).toMatchObject(user)

});