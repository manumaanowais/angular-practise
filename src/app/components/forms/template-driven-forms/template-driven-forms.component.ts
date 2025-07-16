import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.less'
})
export class TemplateDrivenFormsComponent {
  user = {
    name: "",
    age: "",
    email: "",
    gender: ""
  }

  onSubmit(formValues: any): void {
    alert(`Name : ${this.user.name}, Age : ${this.user.age}, Email : ${this.user.email}, Gender : ${this.user.gender}`);
    formValues.reset();
  }
}
