import RequestBuilder from '../lib/req.builder';
import Axios from 'axios';

describe('Request Builder', () => {
  const req = new RequestBuilder(
    'https://jsonplaceholder.typicode.com/posts',
  );

  test('Test send request', async () => {
    const res = await req
      .extendURL('/1')
      .buildRequest()
      .sendRequest();
    expect(res.status).toBe(200);
    console.log(res.data);
    expect(res.data.id).toBe(1);
  });
  test('Interceptor test', () => {
    const axios = Axios.create();
  });

  test('Test custom axios', () => {});
});
