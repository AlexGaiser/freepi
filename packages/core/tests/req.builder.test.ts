import { RequestBuilder, RequestFactory } from '../lib/index';
import Axios from 'axios';

describe('Request Builder', () => {
  const config = {
    baseURL: 'https://jsonplaceholder.typicode.com',
  };

  const testFactory = new RequestFactory(config);

  test('Test send request', async () => {
    const req = testFactory.create();

    const res = await req.extendURL('/posts/1').build().send();
    expect(res.status).toBe(200);
    expect(res.data.id).toBe(1);
  });

  test('Interceptor test', async () => {
    const reqFactory = new RequestFactory(config);
    reqFactory.setRequestInterceptor((config) => {
      config.url += '/1';
      return { ...config };
    });

    const req: RequestBuilder = reqFactory.create();
    const res = await req.extendURL('/posts').build().send();

    expect(res.config.url).toBe('/posts/1');
    expect(res.data.id).toBe(1);
  });

  test('post request using config', async () => {
    const res = await testFactory
      .create({
        url: '/posts',
        method: 'post',
        data: { something: 'something' },
      })
      .build()
      .send();

    expect(res.data).toStrictEqual({
      id: 101,
      something: 'something',
    });
  });
  test('post request using builder methods', async () => {
    const res = await testFactory
      .create({ url: '/posts' })
      .setMethod('post')
      .setPayload({
        id: 101,
        something: 'something',
      })
      .build()
      .send();

    expect(res.data).toStrictEqual({
      id: 101,
      something: 'something',
    });
  });

  test('get with extend url', async () => {
    const req = await testFactory.create();

    req.setMethod('get');
    req.setURL('/posts');
    req.extendURL('/1');
    console.log(req.url);
    const res = await req.build().send();
    expect(res.data.id).toBe(1);
  });
});
