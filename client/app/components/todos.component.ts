import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';
import {Todo} from '../Todo';

@Component({
  moduleId: module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html'
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private _todoService: TodoService) {

  }

  ngOnInit() {
    this.todos = [];
    this._todoService.getTodos()
        .subscribe(todos => {
          this.todos = todos;
        });
  }
}
