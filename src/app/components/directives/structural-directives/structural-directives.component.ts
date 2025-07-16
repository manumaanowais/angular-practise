import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightOnHoverDirective } from '../../../directives/highlight-on-hover.directive';

@Component({
  selector: 'app-structural-directives',
  imports: [CommonModule, FormsModule, HighlightOnHoverDirective],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.less'
})
export class StructuralDirectivesComponent implements OnInit {
  isDivVisible: boolean = true;

  hideDiv(): void {
    this.isDivVisible = false;
  }

  showDiv(): void {
    this.isDivVisible = true;
  }

  toggleDiv(): void {
    this.isDivVisible = !this.isDivVisible;
  }

  cars: string[] = ["audi", "bmw", "mercedes", "thar", "volvo", "mustang", "mahindra", "bugatti", "ferrari"];

  todos: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(data => this.todos = data);
  }

  trackByFn(item:any): any {
    return item.id;
  }

  selectedCar: string = "";
}
