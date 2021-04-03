import { AxiosPromise, AxiosResponse } from "axios";
import { find } from "./services/base.req";

export class DinoIpsum {
  private baseURL = "http://dinoipsum.herokuapp.com/api/"

  public async getDinoIpsum (format = "json", paragraphs = 10, words = 30): Promise<any> {
    format = format.toLowerCase();
    if (format != 'json' && format != 'html' && format != 'text')
    {
      format = 'json';
    }
    
    const url: string = this.getBaseURL();
    const params: any = {
      format,
      paragraphs,
      words
    }

    const result = await find('')(url)(params);
    return result
  }

  public getBaseURL(): string {
    return this.baseURL;
  }
}

export default DinoIpsum;