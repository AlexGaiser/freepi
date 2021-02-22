import { requests } from '@freepi/core';
import { Todo } from '../../JSONPlaceholder/lib/models/Todo';
import JSONPlaceholder from '@freepi/jsonplaceholder';

test('get request', async () => {
  const response = await requests.get<Todo>(
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

describe('JsonPlaceholder', () => {
  const jsonPlaceholder = new JSONPlaceholder();

  // --------Todo Tests Start Here--------

  test('should find nested path', async () => {
    const res = await jsonPlaceholder.todos.findNested(
      'posts',
      1,
      'comments',
    )();
    expect(res.status).toBe(200);
    expect(res.data.length).toBeGreaterThanOrEqual(1);
  });

  test('should return all todo items', async () => {
    const res = await jsonPlaceholder.todos.findAll();

    expect(res.status).toBe(200);
    expect(res.data.length).toBeGreaterThan(1);
  });
});
