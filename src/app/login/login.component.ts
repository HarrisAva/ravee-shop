import { NgOptimizedImage } from '@angular/common'
import { Component, ElementRef, ViewChild } from '@angular/core'
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // FormGroup
  loginForm!: FormGroup
  // check if user submits form or not
  submitted = false

  // toggle password visibility
  hide = true

  // form data
  userLogin = {
    "email": "",
    "password": ""
  }

  @ViewChild('emailInput') emailInput!: ElementRef  //use ViewChild to find element in template

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
        // alert("Login Success")
        Swal.fire({
          title: 'เข้าสู่ระบบสำเร็จ',
          text: 'ยินดีต้อนรับเข้าสู่ระบบ Stock Management',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      } else {
        // alert("Login Fail")
        Swal.fire({
          title: 'มีข้อผิดพลาด',
          text: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }

    }
  }

  resetForm(){
    this.submitted = false
    this.loginForm.reset()

    // focus on email input
    this.emailInput.nativeElement.focus()
  }

}
