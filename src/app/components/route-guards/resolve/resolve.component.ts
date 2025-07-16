import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolve',
  imports: [CommonModule],
  templateUrl: './resolve.component.html',
  styleUrl: './resolve.component.less'
})
export class ResolveComponent implements OnInit {
  todos: any = [];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.todos = this.route.snapshot.data['todos'];
  }
}
