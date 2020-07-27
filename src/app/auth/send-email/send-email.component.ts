import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
  providers:[AuthService],
})
export class SendEmailComponent implements OnInit {

  public user$:Observable<any> = this._authService.afAuth.user;

  constructor(
    private _authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

onSendEmail(){
  // Servicio SendEmail
  console.log("Reenviar email de verificación");
  this._authService.sendVerificationEmail();
}

goLogin(){
  this._authService.logout();
  this.router.navigate(['/login']);
}

}
