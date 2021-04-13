import { AxiosPromise, AxiosResponse } from 'axios';
import { find } from './services/base.req';

type FormatString = 'text' | 'json' | 'html';
interface QueryParams {
  format: FormatString;
  paragraphs: number;
  words: number;
}

export class DinoIpsum {
  private baseURL = 'http://dinoipsum.herokuapp.com/api/';

  public async getDinoIpsum(
    format: FormatString = 'json',
    paragraphs = 10,
    words = 30,
  ): Promise<any> {
    const url: string = this.getBaseURL();
    const params: QueryParams = {
      format,
      paragraphs,
      words,
    };

    const result = await find('')(url)(params);
    return result;
  }

  public getBaseURL(): string {
    return this.baseURL;
  }
}

export default DinoIpsum;
