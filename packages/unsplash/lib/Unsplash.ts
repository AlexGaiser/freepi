import { UnsplashConfig } from './models/UsplashConfig.model';
import { requests } from '@freepi/core';
import { photos } from './services/photos';
export class Unsplash {
  private access_key: string;
  private baseURL = 'https://api.unsplash.com';
  private requests = requests.customReqInit({
    baseURL: this.baseURL,
  });
  constructor(config: UnsplashConfig) {
    this.access_key = config.access_key;
    // should add a new method to requests: setauthorization, this is a common enough operation to need its own method
    this.requests.setInterceptor({
      headers: {
        Authorization: 'Client-ID ' + this.access_key,
      },
    });
  }

  public photos = photos(this.requests);

  getAccessKey = () => {
    return this.access_key;
  };
}

export default Unsplash;
