import { Routes } from '@angular/router';
export const routes: Routes = [


   { path: '', loadComponent : ()=> import('./pages/auth/login/login.component').then(log=> log.LoginComponent)}

];

