import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.less'
})
export class ReactiveFormsComponent {

  get name() {
    return this.userForm.get('name')!;
  }
  get age(){
    return this.userForm.get('age')!;
  }
  get email(){
    return this.userForm.get('email')!;
  }
  get gender() {
    return this.userForm.get('gender')!;
  }


  userForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    age: new FormControl("", [Validators.required, Validators.min(18), Validators.max(50)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    gender: new FormControl("", [Validators.required])
  })

  onSubmit(): void {
    alert(`Name : ${this.userForm.value.name}, Age : ${this.userForm.value.age}, Email : ${this.userForm.value.email}, Gender : ${this.userForm.value.gender}`)
    this.userForm.reset();
  }

}
