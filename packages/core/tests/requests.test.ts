import { Todo } from '../../JSONPlaceholder/lib/models/Todo';

import { customReqInit, get, post } from '../lib/requests';

const requests = customReqInit();

describe('custom request methods', () => {
  test('get request', async () => {
    const response = await requests.get<any>(
      'https://jsonplaceholder.typicode.com/todos/1',
    );

    expect(response.data).toStrictEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    });
  });

  test('post request', async () => {
    const response = await requests.post<any>(
      'https://jsonplaceholder.typicode.com/posts/',
      { data: { something: 'something' } },
    );

    expect(response.data).toStrictEqual({
      id: 101,
      something: 'something',
    });
  });
});

describe('test default axios methods', () => {
  test('get request', async () => {
    const response = await get<Todo>(
      'https://jsonplaceholder.typicode.com/todos/1',
    );

    expect(response.data).toStrictEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    });
  });

  test('post request', async () => {
    const response = await post<any>(
      'https://jsonplaceholder.typicode.com/posts/',
      { data: { something: 'something' } },
    );

    expect(response.data).toStrictEqual({
      id: 101,
      something: 'something',
    });
  });
});
// test('test interceptor', async () => {
//   const interceptor = setInterceptor({
//     headers: {
//       Authorization: 'Client-ID ' + process.env.UNSPLASH_ID,
//     },
//   });

//   const response = await get(
//     'https://api.unsplash.com/photos/random',
//   );
//   expect(response.status).toBe(200);
// });
