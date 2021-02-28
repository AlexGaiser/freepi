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

  test('Interceptor test', async () => {
    const testAxios = Axios.create();

    testAxios.interceptors.request.use((config) => {
      config.url += '/1';
      return { ...config };
    });

    const req = new RequestBuilder(
      'https://jsonplaceholder.typicode.com/posts',
    );
    const res = await req
      .setReq(testAxios)
      .buildRequest()
      .sendRequest();
    expect(res.config.url).toBe(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
  });
});
