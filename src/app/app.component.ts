import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private http: UserService) {}

  newTodo = "";
  todos: Array<TODO> = [];
  todoObj: TODO;

  ngOnInit() {
    this.http.getTodos().subscribe(
      (res: any) => {
        console.log(res);
        this.todos = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  /**
   * @description Add TODO
   * @date 2020-03-01
   */
  addTodo(event) {
    this.todoObj = {
      title: this.newTodo,
      completed: false
    };
    event.preventDefault();
    this.http.postNewTodo(this.todoObj).subscribe(
      (res: TODO) => {
        console.log(res);
        this.todos.unshift(res);
      },
      err => {
        console.log(err);
      }
    );
    this.newTodo = "";
  }

  /**
   * @description Delete the TODO
   * @date 2020-03-01
   */
  deleteTodo(index, arrayIndex) {
    console.log(index, arrayIndex);
    this.http.deleteTodo(index).subscribe(
      res => {
        console.log(res);
        this.todos.splice(arrayIndex, 1);
      },
      err => {
        console.log(err);
      }
    );
  }
}

interface TODO {
  title: string;
  completed: boolean;
}
