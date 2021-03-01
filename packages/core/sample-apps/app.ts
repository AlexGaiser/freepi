import { RequestFactory } from '../lib/req.builder';

const jpFactory: RequestFactory = new RequestFactory({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// jpFactory.setRequestInterceptor((config) => {
//   return { ...config, headers: 'Authorization test' };
// });

jpFactory.setRequestInterceptor((config) => {
  const ext = '/posts';
  const url = config.url + ext;

  return { ...config, url };
});

const req = jpFactory.create('/1');

req.build().send();
