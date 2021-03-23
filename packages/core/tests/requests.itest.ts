import { Todo } from '../../JSONPlaceholder/lib/models/Todo';

import { customReqInit, get, post } from '../lib/requests';

const requests = customReqInit();

describe('custom request methods', () => {
  test('get request', async () => {
    const response = await requests.get<Todo>('localhost:1648');

    expect(response.config.method).toBe('get');
  });
});

test('post request', async () => {
  const response = await requests.post<any>('localhost:1648', {
    data: { something: 'something' },
  });

  expect(response.config.data).toStrictEqual({
    id: 101,
    something: 'something',
  });
  expect(response.config.method).toBe('post');

  test('test headers', async () => {
    const interceptor = requests.setHeaders({
      Test: 'Client-ID test',
    });

    const response = await get('localhost:1648');
    expect(response.config.headers.Test).toBe('Client-ID test');
  });
});

describe('test default axios methods', () => {
  test('get request', async () => {
    const response = await get<Todo>('localhost:1648');

    expect(response.config.data).toStrictEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    });
    expect(response.config.method).toBe('get');
  });

  test('post request', async () => {
    const response = await post<any>('localhost:1648', {
      data: { something: 'something' },
    });

    expect(response.config.data).toStrictEqual({
      id: 101,
      something: 'something',
    });
  });
});
