import { UnsplashConfig } from './models/UsplashConfig.model';
import { requests } from '@freepi/core';
export class Unsplash {
  private access_key: string;
  private baseURL = 'https://api.unsplash.com';

  constructor(config: UnsplashConfig) {
    this.access_key = config.access_key;
  }
  getAccessKey = () => {
    return this.access_key;
  };
}

export default Unsplash;
