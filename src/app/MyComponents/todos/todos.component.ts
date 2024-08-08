import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { Action } from 'rxjs/internal/scheduler/Action';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  // storage: string;
  constructor() {
    this.todos = [];
    // this.storage = localStorage.getItem(JSON.parse('List'));
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('List', JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('List', JSON.stringify(this.todos));
  }
}
