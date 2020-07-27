import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[AuthService]
})
export class NavbarComponent {

  public user$:Observable<any> = this._authService.afAuth.user

  constructor( 
    private _authService: AuthService,
    private router: Router,

    ) { }

  onLogout(){
    try{
      this._authService.logout();
      this.router.navigate(['/login']);
    }
    catch(error){
      console.log("Error Logout --> ", error);
    }
  }

}
