import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { AuthService } from '../service/auth.service';
import { ILogin } from './login';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
  })
   
  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.authService
    .check(this.form.get('email')?.value,this.form.get('password')?.value)
    .subscribe((response)=>{
      this.router.navigate(['/student']);
    })
  }
}
