import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {

  constructor(private service:SharedService) { }

  TodoList: any = [];
  ModalTitle!:string;
  ActivateAddEditTodo:boolean = false;
  todo:any;

  ngOnInit(): void {
    this.refreshTodoList();
  }

  addClick() {
    this.todo = {
      TodoId:0,
      TodoName:"",
      TodoDescription:"",
      TodoStatus:false
    }
    this.ModalTitle = "Add Todo";
    this.ActivateAddEditTodo = true;
  }

  editClick(todo: any) {
    this.todo = todo;
    this.ModalTitle = "Edit Todo";
    this.ActivateAddEditTodo = true;
  }

  deleteClick(todo: any) {
    if(confirm('Are you sure?')) {
      this.service.deleteTodo(todo.TodoId).subscribe((data)=>{
        alert(data.toString());
        this.refreshTodoList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditTodo = false;
    this.refreshTodoList();
  }

  refreshTodoList() {
    this.service.getTodoList().subscribe((data)=>{
      this.TodoList = data;
    });
  }

}
