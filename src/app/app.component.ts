import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-app';
  // self test
  // constructor() {
  //   setTimeout(() => {
  //     this.title = 'Changed Title';
  //   }, 2000);
  // }
}
