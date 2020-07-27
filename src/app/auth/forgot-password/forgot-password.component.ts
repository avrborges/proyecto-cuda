import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers: [AuthService]
})
export class ForgotPasswordComponent implements OnInit {

  userEmail = new FormControl('');
  emailEnviado: boolean = false;

  constructor( 
    private _authservice: AuthService,
    ) {}

  ngOnInit(): void {
  }

  async onReset(){
    try{
      const email = this.userEmail.value;
      await this._authservice.resetPassword(email);
      this.emailEnviado = true;
    }
    catch(error){
      console.log("Error Restablecer Contraseña --> ", error)
    }
    
    // console.log("Resetear contraseña --> ", this.resetPassword.value);
  }

}
