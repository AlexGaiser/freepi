import { Todo } from '../../wrappers/JSONPlaceholder/models/Todo';
import requests from '../requests';

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
