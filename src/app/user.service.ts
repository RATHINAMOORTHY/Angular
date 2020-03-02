import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private baseUrl = "https://jsonplaceholder.typicode.com/todos";
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get(`${this.baseUrl}/?userId=1`);
  }

  postNewTodo(todoData) {
    return this.http.post(`${this.baseUrl}`, todoData);
  }

  deleteTodo(todoToDelete) {
    return this.http.delete(`${this.baseUrl}/${todoToDelete}`);
  }
}
