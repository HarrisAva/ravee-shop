import { Component } from '@angular/core'
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // FormGroup
  loginForm!: FormGroup
  // check if user submits form or not
  submitted = false

  // form data
  userLogin = {
    "email": "",
    "password": ""
  }

  // Constructor
  constructor(
    private formBuilder: FormBuilder
  ){
  }

  // ngOnInit
  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  submitLogin(){

    this.submitted = true

    // stop here if form is invalid
    if(this.loginForm.invalid){
      return
    } else {
      this.userLogin.email = this.loginForm.value.email
      this.userLogin.password = this.loginForm.value.password

      if(this.userLogin.email == "test@email.com" && this.userLogin.password == "password"){
        alert("Login Success")
      } else {
        alert("Login Fail")
      }

    }
  }

  resetForm(){
    this.submitted = false
    this.loginForm.reset()
  }

}
