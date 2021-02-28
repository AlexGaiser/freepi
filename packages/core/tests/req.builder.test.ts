import RequestBuilder, { RequestFactory } from '../lib/req.builder';
import Axios from 'axios';

describe('Request Builder', () => {
  const config = {
    baseURL: 'https://jsonplaceholder.typicode.com',
  };

  const req = new RequestFactory(config).create();

  test('Test send request', async () => {
    const res = await req
      .extendURL('/posts/1')
      .buildRequest()
      .sendRequest();
    expect(res.status).toBe(200);
    console.log(res.data);
    expect(res.data.id).toBe(1);
  });

  test('Interceptor test', async () => {
    testAxios.interceptors.request.use((config) => {
      config.url += '/1';
      return { ...config };
    });

    const req = new RequestFactory(testAxios).create();
    const res = await req
      .extendURL('/posts')
      .buildRequest()
      .sendRequest()
      .catch((e) => {
        console.log(e.config);
        return e;
      });
    expect(res.config.url).toBe('/posts/1');
    expect(res.data.id).toBe(1);
  });
});
