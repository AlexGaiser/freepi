import Unsplash from '../lib';
import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../.env` });

describe('Testing Basic Unsplash API Calls', () => {
  test('initializes unsplash', () => {
    console.log(process.env.UNSPLASH_CLIENT_ID);
    const instance = new Unsplash({
      access_key: process.env.UNSPLASH_CLIENT_ID,
    });
    expect(typeof instance.getAccessKey()).toBe('string');
  });
  test('photos get random', async () => {
    const instance = new Unsplash({
      access_key: process.env.UNSPLASH_CLIENT_ID,
    });

    const res = await instance.photos.getRandom();
    expect(res.status).toBe(200);
  });
});
