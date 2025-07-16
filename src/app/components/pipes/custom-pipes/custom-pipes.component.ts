import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FilterPipe } from '../../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-pipes',
  imports: [CommonModule, FilterPipe, FormsModule],
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.less'
})
export class CustomPipesComponent {
  searchedValue: string = "";
  cars: string[] = ["audi", "bmw", "mercedes", "thar", "volvo", "mustang", "mahindra", "bugatti", "ferrari"];
}
