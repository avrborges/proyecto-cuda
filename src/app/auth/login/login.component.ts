import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;


  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.formLogin = this._formBuilder.group({
      email:['',Validators.required],
      password:['',[Validators.required, Validators.minLength(8)]]
    })
   }

  ngOnInit(): void {
  }
 async onLogin(){ 
   // console.log("Login -> ", this.formLogin.value);
   const {email, password} = this.formLogin.value;
   try{
    const user =  await this._authService.login(email, password);
    if(user && user.user.emailVerified){
      // Redirect to homepage
      this.router.navigate(['/home']);
    } else if (user) {
      this.router.navigate(['/verificacion']);
    } else {
      this.router.navigate(['/registro']);
    }
   }
   catch(error){
     console.log("Error Login --> ", error);
   }
 }

}
