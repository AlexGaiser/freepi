import Unsplash from '../lib';
import * as dotenv from 'dotenv';
import { PhotoQuery } from '../lib/models/ParamTypes';

dotenv.config({ path: `${__dirname}/../.env` });

describe('Testing Basic Unsplash API Calls', () => {
  const instance = new Unsplash({
    access_key: process.env.UNSPLASH_CLIENT_ID,
  });

  test('initializes unsplash', () => {
    const test = new Unsplash({
      access_key: process.env.UNSPLASH_CLIENT_ID,
    });
    expect(typeof test.getAccessKey()).toBe('string');
  });
  test('photos get random', async () => {
    const res = await instance.photos.getRandom();
    expect(res.status).toBe(200);
  });

  test('get random with parameters', async () => {
    const res = await instance.photos.getRandom({
      orientation: 'landscape',
      count: 10,
    });
    expect(res.status).toBe(200);
    expect(res.data.length).toBe(10);
  });

  test('photos get by id', async () => {
    const res = await instance.photos.getById('CTflmHHVrBM');
    expect(res.status).toBe(200);
  });
  test('get all photos with parameters', async () => {
    const res = await instance.photos.getAll({
      page: 1,
      per_page: 2,
      order_by: 'popular',
    });
    console.log(res.config);
    expect(res.status).toBe(200);
    expect(res.data.length).toBe(2);
  });
});

describe('search photos', () => {
  test('search with photos query', async () => {
    const test = new Unsplash({
      access_key: process.env.UNSPLASH_CLIENT_ID,
    });

    const res = await test.photos.search({
      query: 'cat',
      page: 1,
      per_page: 1,
    });
    expect(res.status).toBe(200);
  });
  test('search with defualt query', async () => {
    const test = new Unsplash({
      access_key: process.env.UNSPLASH_CLIENT_ID,
    });

    const res = await test.search({
      query: 'cat',
      page: 1,
      per_page: 1,
      color: 'orange',
    });
    expect(res.status).toBe(200);
  });
});
