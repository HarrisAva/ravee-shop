import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  signupForm!: FormGroup
  submitted = false

  // form data

  userSignup = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": ""
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  submitSignup() {

    this.submitted = true;

    if(this.signupForm.invalid){
      return
    } else {
      this.userSignup.firstName = this.signupForm.value.firstName
      this.userSignup.lastName = this.signupForm.value.lastName
      this.userSignup.email = this.signupForm.value.email
      this.userSignup.password = this.signupForm.value.password
    }
    console.log(this.signupForm.value)
  }

 resetForm(){
  this.submitted = false
  this.signupForm.reset()

 }
}
