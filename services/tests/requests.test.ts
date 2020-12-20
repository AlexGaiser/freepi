import { Post } from "../../wrappers/JSONPlaceholder/models/Post";
import { Todo } from "../../wrappers/JSONPlaceholder/models/Todo";
import RequestBuilder from "../req.builder";
import requests, { buildRequest, request, setReqMethod, setReqUrl } from "../requests";

test('get request', async () => {
  const response = await requests.get<Todo>('https://jsonplaceholder.typicode.com/todos/1')

  expect(response.data).toStrictEqual({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    });
});

test('post request', async ()=>{
  const response = await requests.post<any>('https://jsonplaceholder.typicode.com/posts/', {data:{something:"something"}})

  expect(response.data).toStrictEqual({"id": 101,something:"something"})
})

test('test request builder', async ()=> {
  const config = buildRequest(
    setReqMethod('get'), 
    setReqUrl('https://jsonplaceholder.typicode.com/posts')
  )
  ({})

  const res = await request(config)
  expect(res.status).toBe(200)
})

test('test request builder', async ()=>{
  const req = new RequestBuilder('https://jsonplaceholder.typicode.com')
  const res = await req.extendURL('/posts')
     .setReqMethod('get')
     .buildRequest()
     .sendRequest()
  expect(res.status).toBe(200)
})
