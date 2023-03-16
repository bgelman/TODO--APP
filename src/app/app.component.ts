import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  todoArray: string[]=[];
  addTodo(value:string){
    this.todoArray.push (value)
    console.log(this.todoArray)  }
}
