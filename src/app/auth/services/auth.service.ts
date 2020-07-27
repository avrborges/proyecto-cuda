import { Injectable } from '@angular/core';

import { first } from 'rxjs/operators';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable()
export class AuthService {

  public user: User;

  constructor( public afAuth: AngularFireAuth, ) { }

  async resetPassword(userEmail:string):Promise<void> {
    try{
      
      return this.afAuth.sendPasswordResetEmail(userEmail);

    }
    catch(error){
      console.log("Error Reset Password --> ", error)
    }
  }

  async sendVerificationEmail(): Promise<void>{
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async login(email:string, password:string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    }
    catch(error){
      console.log('Error Login -> ', error);
    }

  }

  async register(email:string, password:string){
    try{    
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.sendVerificationEmail();
      return result
    }
    catch(error){
      console.log('Error Registro -> ', error);
    }

  }

  async logout(){
    try{
      await this.afAuth.signOut();
    }
    catch(error){
      console.log('Error Logout -> ', error);
    }
  }

  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
  
}
