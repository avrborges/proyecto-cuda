import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SendEmailComponent } from './auth/send-email/send-email.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'verificacion', component: SendEmailComponent},

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, 
  { path: 'registro', loadChildren: () => import('./auth/registro/registro.module').then(m => m.RegistroModule) },
  { path: 'forgot-password', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
