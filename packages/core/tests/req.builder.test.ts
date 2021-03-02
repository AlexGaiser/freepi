import { RequestBuilder, RequestFactory } from '../lib/index';
import Axios from 'axios';
import axios from 'axios';
import { Todo } from '../../JSONPlaceholder/lib/models/Todo';
import { Post } from '../../JSONPlaceholder/lib/models/Post';

describe('Request Builder', () => {
  const config = {
    baseURL: 'https://jsonplaceholder.typicode.com',
  };

  const testFactory = new RequestFactory(config);

  test('Test send request', async () => {
    const req = testFactory.create();

    const res = await req.extendURL('/posts/1').build().send<Post>();
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
    const res = await req.extendURL('/posts').build().send<Post>();

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
    const res = await req.build().send<Post>();
    expect(res.data.id).toBe(1);
  });

  test('Request Builder without Factory', async () => {
    const req = new RequestBuilder();
    const res = await req
      .setURL('https://jsonplaceholder.typicode.com')
      .setMethod('get')
      .extendURL('/posts')
      .build()
      .send<Post[]>();
    expect(res.data.length).toBeGreaterThan(1);
    expect(res.status).toBe(200);
  });
  test('Request Builder without Factory url in config', async () => {
    const req = new RequestBuilder({
      url: 'https://jsonplaceholder.typicode.com',
    });
    const res = await req
      .setMethod('get')
      .extendURL('/posts')
      .build()
      .send<Post[]>();
    expect(res.data.length).toBeGreaterThan(1);
    expect(res.status).toBe(200);
  });
  test('Request Builder without Factory url in config', async () => {
    const testReq = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });

    const request = new RequestBuilder({
      Req: testReq,
      url: '/todos',
    });
    const res = await request.build().send<Todo[]>();
    expect(res.data.length).toBeGreaterThan(1);
  });
});
