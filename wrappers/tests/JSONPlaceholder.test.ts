import { post } from "../../services/requests";
import JSONPlaceholder from "../JSONPlaceholder/JSONPlaceholder";
import { Post } from "../JSONPlaceholder/models/Post";
import { Todo } from "../JSONPlaceholder/models/Todo";
import { User } from "../JSONPlaceholder/models/User";

describe('JsonPlaceholder', () => {

  const jsonPlaceholder = new JSONPlaceholder()
  
  test('should return all todo items', async () => {
    const res = await jsonPlaceholder.todos.findAll();
    expect(res.status).toBe(200);
    
  });
  
  test('should return a specific todos by Id ', async ()=>{
    const expectedTodo:Todo = {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    }

    const res = await jsonPlaceholder.todos.getById(8);

    expect(res.status).toBe(200);
    expect(res.data).toMatchObject(expectedTodo);
  });

  test('should return a not-found error when searching for a todo by an id that does not exist', async () => {
    const res = await jsonPlaceholder.todos.getById(-100000);
    expect(res.status).toBe(404);
  });
  
  test('should return a success response when creating a new todo', async () => {
    const newTodo: Todo = {
      userId: 921,
      id: 3000,
      title: "This is a real Todo!",
      completed: false,
    }

    const res = await jsonPlaceholder.todos.create(newTodo);
    expect(res.status).toBe(201);
  });


  test('should return all posts', async () => {
    const res = await jsonPlaceholder.posts.findAll();
    expect(res.status).toBe(200);
  });

  test('should return a post by Id ', async ()=>{
    const expectedPost: Post = {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    }

    const res = await jsonPlaceholder.posts.getById(5);

    expect(res.status).toBe(200);
    expect(res.data).toMatchObject(expectedPost);
  });

  test('should return a not-found error when searching for a post by an id that does not exist', async () => {
    const res = await jsonPlaceholder.todos.getById(-100000);
    expect(res.status).toBe(404);
  });
  
  test('should return a success response when creating a new todo', async () => {
    const newPost: Post = {
      userId: 10,
      id: 978,
      title: "This is a Title!",
      body: "This is the body!",
    }

    const res = await jsonPlaceholder.posts.create(newPost);
    expect(res.status).toBe(201);
  });


  
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

});
