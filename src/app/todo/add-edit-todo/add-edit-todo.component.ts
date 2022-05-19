import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-todo',
  templateUrl: './add-edit-todo.component.html',
  styleUrls: ['./add-edit-todo.component.css']
})
export class AddEditTodoComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() todo:any;
  TodoId!:string;
  TodoTitle!:string;
  TodoDescription!:string;
  TodoStatus:boolean = false;

  ngOnInit(): void {
    this.TodoId = this.todo.TodoId;
    this.TodoTitle = this.todo.TodoTitle;
    this.TodoDescription = this.todo.TodoDescription;
    this.TodoStatus = this.todo.TodoStatus;
  }

  addTodo() {
    var val = { 
      TodoId:this.TodoId,
      TodoTitle:this.TodoTitle,
      TodoDescription:this.TodoDescription,
      TodoStatus:this.TodoStatus
    };
    this.service.addTodo(val).subscribe(res=>{
      alert(res.toString())
    });
  }

  updateTodo() {
    var val = { 
      TodoId:this.TodoId,
      TodoTitle:this.TodoTitle,
      TodoDescription:this.TodoDescription,
      TodoStatus:this.TodoStatus
    };
    this.service.updateTodo(val).subscribe(res=>{
      alert(res.toString())
    });
  }

}
