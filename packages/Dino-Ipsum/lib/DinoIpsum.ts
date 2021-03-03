import { find } from "./services/base.req";


export class DinoIpsum {
  private baseURL = "http://dinoipsum.herokuapp.com/api/?"
  // +"?format=json" or text or html
  // connect params with "&"
  // paragraphs=3 or any numb
  // words=15 or any numb

  // Defaults to HTML, 30 words, 10 paragraphs

  public getDinoIpsum(format = "json", paragraphs = 10, words = 30): string {
    const url: string = this.getBaseURL();
    const path: string = `format=${format}&paragraphs=${paragraphs}&words=${words}`;

    const result = find(path)(url);
  }

  public getBaseURL(): string {
    return this.baseURL;
  }
}