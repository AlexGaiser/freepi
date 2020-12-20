import { post } from "../../services/requests";
import JSONPlaceholder from "../JSONPlaceholder/JSONPlaceholder";
import { Post } from "../JSONPlaceholder/models/Post";
import { Todo } from "../JSONPlaceholder/models/Todo";
import { User } from "../JSONPlaceholder/models/User";
import { Photo } from "../JsonPlaceholder/models/Photo";
import { Comment } from "../JSONPlaceholder/models/Comment";
import { Album } from "../JSONPlaceholder/models/Album";

describe('JsonPlaceholder', () => {

  const jsonPlaceholder = new JSONPlaceholder()

  // --------Todo Tests Start Here--------
  
  test('should return all todo items', async () => {
    const res = await jsonPlaceholder.todos.findAll();
    
    expect(res.status).toBe(200);
    expect(res.data.length).toBeGreaterThan(1);
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

  // --------Post Tests Start Here--------

  test('should return all posts', async () => {
    const res = await jsonPlaceholder.posts.findAll();

    expect(res.status).toBe(200);
    expect(res.data.length).toBeGreaterThan(1);
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
  
  test('should return a success response when creating a new post', async () => {
    const newPost: Post = {
      userId: 10,
      id: 978,
      title: "This is a Title!",
      body: "This is the body!",
    }

    const res = await jsonPlaceholder.posts.create(newPost);

    expect(res.status).toBe(201);
  });

  // --------User Tests Start Here--------

  test('should return all users', async () => {
    const res = await jsonPlaceholder.users.findAll();
    expect(res.status).toBe(200);
    expect(res.data.length).toBeGreaterThan(1);
  });

  test('should return a user by id ', async ()=>{
    const expectedUser: User = {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
          geo: {
            lat: "-31.8129",
            lng: "62.5342",
            }
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems"
      }
    }

    const res = await jsonPlaceholder.users.getById(5);

    expect(res.status).toBe(200);
    expect(res.data).toMatchObject(expectedUser);
  });

  test('should return a not-found error when searching for a user by an id that does not exist', async () => {
    const res = await jsonPlaceholder.users.getById(-100000);
    expect(res.status).toBe(404);
  });
  
  test('should return a success response when creating a new user', async () => {
    const newUser: User = {
      id: 97,
      name: "Ian Scott",
      username: "Uber_Scott",
      email: "IanIsDaBest@CoolIan.net",
      address: {
        street: "Apple St",
        suite: "Suite 333",
        city: "Nagasaki",
        zipcode: "716-239",
          geo: {
            lat: "65.9817",
            lng: "27.0012",
            }
      },
      phone: "(123)456-7890",
      website: "IanIsCool.io",
      company: {
        name: "Green Is Best",
        catchPhrase: "Waaagh!",
        bs: "What is bs?"
      }
    }

    const res = await jsonPlaceholder.posts.create(newUser);
    expect(res.status).toBe(201);
  });

  // --------Photo Tests Start Here--------

  test('should return all photo items', async () => {
    const res = await jsonPlaceholder.photos.findAll();
    
    expect(res.status).toBe(200);
    expect(res.data.length).toBeGreaterThan(1);
  });
  
  test('should return a specific photo object by Id ', async ()=>{
    const expectedPhoto:Photo = {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355"
    }

    const res = await jsonPlaceholder.photos.getById(3);

    expect(res.status).toBe(200);
    expect(res.data).toMatchObject(expectedPhoto);
  });

  test('should return a not-found error when searching for a photo by an id that does not exist', async () => {
    const res = await jsonPlaceholder.photos.getById(-100000);
    expect(res.status).toBe(404);
  });
  
  test('should return a success response when creating a new photo object', async () => {
    const newPhoto:Photo = {
      albumId: 98,
      id: 67,
      title: "The Best Darn Album You'll Ever See!",
      url: "URL Goes Here!",
      thumbnailUrl: "URL Thumbnail Here!"
    }

    const res = await jsonPlaceholder.photos.create(newPhoto);
    expect(res.status).toBe(201);
  });

  // --------Comment Tests Start Here--------

  test('should return all comment objects', async () => {
    const res = await jsonPlaceholder.comments.findAll();
    
    expect(res.status).toBe(200);
    expect(res.data.length).toBeGreaterThan(1);
  });
  
  test('should return a specific comment object by Id ', async ()=>{
    const expectedComment:Comment = {
      postId: 79,
      id: 393,
      name: "illo quis nostrum accusantium architecto et aliquam ratione",
      email: "Donna@frederik.com",
      body: "et quia explicabo\nut hic commodi quas provident aliquam nihil\nvitae in voluptatem commodi\nvero velit optio omnis accusamus corrupti voluptatem"
    }

    const res = await jsonPlaceholder.comments.getById(393);

    expect(res.status).toBe(200);
    expect(res.data).toMatchObject(expectedComment);
  });

  test('should return a not-found error when searching for a comment by an id that does not exist', async () => {
    const res = await jsonPlaceholder.comments.getById(-100000);
    expect(res.status).toBe(404);
  });
  
  test('should return a success response when creating a new comment object', async () => {
    const newComment:Comment = {
      postId: 100000,
      id: 9999,
      name: "Gary The Snail",
      email: "Gary@snailsRule.net",
      body: "Snails are slimey and so gross\n they can not ride upon a boat"
    }

    const res = await jsonPlaceholder.comments.create(newComment);
    expect(res.status).toBe(201);
  });

  // --------Album Tests Start Here--------

  test('should return all album objects', async () => {
    const res = await jsonPlaceholder.albums.findAll();
    
    expect(res.status).toBe(200);
    expect(res.data.length).toBeGreaterThan(1);
  });
  
  test('should return a specific album object by Id ', async ()=>{
    const expectedAlbum:Album = {
      userId: 10,
      id: 100,
      title: "enim repellat iste"
    }

    const res = await jsonPlaceholder.albums.getById(100);

    expect(res.status).toBe(200);
    expect(res.data).toMatchObject(expectedAlbum);
  });

  test('should return a not-found error when searching for an album by an id that does not exist', async () => {
    const res = await jsonPlaceholder.albums.getById(-100000);
    expect(res.status).toBe(404);
  });
  
  test('should return a success response when creating a new album object', async () => {
    const newAlbum:Album = {
      userId: 923,
      id: 87623,
      title: "Kyoto 2012"
    }

    const res = await jsonPlaceholder.comments.create(newAlbum);
    expect(res.status).toBe(201);
  });

});
