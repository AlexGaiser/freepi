import Axios from "axios";

class JSONWrapper {
  baseURL:string;
  
  constructor() {
    this.baseURL = 'https://jsonplaceholder.typicode.com'
  }
  
  getTodos(todoIndex) {
    return Axios.get(`${this.baseURL}/todos/${todoIndex}`)
  }



} 

export default JSONWrapper