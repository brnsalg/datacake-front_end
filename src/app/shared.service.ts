import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly urlAPI = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }

  getTodoList():Observable<any[]>{
    return this.http.get<any[]>(this.urlAPI+"/todo/");
  }

  addTodo(value:any){
    return this.http.post(this.urlAPI+"/todo/", value);
  }

  updateTodo(value:any){
    return this.http.put(this.urlAPI+"/todo/", value);
  }

  deleteTodo(value:any){
    return this.http.delete(this.urlAPI+"/todo/" + value);
  }
}
