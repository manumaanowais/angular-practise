import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.less'
})
export class AttributeDirectivesComponent {
  styles: string = "";

  classes: string[] = [];

  addClasses(): void {
    this.classes = ["colorClass", "backgroundColorClass"];
  }

  removeClasses(): void {
    this.classes = [];
  }

  isActive: boolean= false;
}