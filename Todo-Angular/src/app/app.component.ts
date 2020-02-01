import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form: FormGroup;
  public todos: Todo[] = []; //declarei um objeto qualquer, inicializando ele como vazio.

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([ //usado para quando se tem mais de uma validador.
        Validators.maxLength(60),
        Validators.minLength(3),
        Validators.required,
      ])]
    });
    this.load();
  }

  load() {
    this.todos.push({
      title: 'Ir para a academia',
      done: false
    });
    this.todos.push({
      title: 'Estudar JAVA',
      done: false
    });
    this.todos.push({
      title: 'Ir trabalhar de Onibus',
      done: false
    }); 
  }

  addTodo() {
    const title = this.form.controls['title'].value;
    this.todos.push(new Todo(title, false));
    this.form.reset();

  }

  removeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  markAsDone(todo: Todo) {
    todo.done = true;

  }

}
