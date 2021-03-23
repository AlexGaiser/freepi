import { UnsplashConfig } from './models/UsplashConfig.model';
import { requests } from '@freepi/core';
import { photos } from './services/photos';
import { search } from './services/search.service';
export class Unsplash {
  private access_key: string;
  private baseURL = 'https://api.unsplash.com';
  private requests = requests.customReqInit({
    baseURL: this.baseURL,
  });
  constructor(config: UnsplashConfig) {
    this.access_key = config.access_key;
    this.requests.setHeaders({
      Authorization: 'Client-ID ' + this.access_key,
    });
  }

  public photos = photos(this.requests);
  public search = search(this.requests);

  public getAccessKey = (): string => {
    return this.access_key;
  };
}

export default Unsplash;
