import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, take } from 'rxjs';

@Component({
  selector: 'app-http-client',
  imports: [CommonModule],
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.less'
})
export class HttpClientComponent implements OnInit{
  todos: any = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/todos").pipe(take(1), catchError((err): any => {
      console.error("Failed to fetch todos" + err)}))
      .subscribe(data => {
      this.todos = data;
    })
  }
}
