import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';

import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [AuthService],
})
export class RegistroComponent implements OnInit {

  formRegistro: FormGroup;

  constructor(
    private _authService: AuthService,
    private _fromBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.formRegistro = this._fromBuilder.group({
      email:['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  async onRegistro(){
    // console.log("Registro -> ", this.formRegistro.value);
    const {email, password} = this.formRegistro.value;
    try{
      const user = await this._authService.register(email, password);
      if(user){
        this.router.navigate(['/verificacion']);
      }
    }
    catch(error){
      console.log("Error Registro --> ", error);
    }
  }
}
