import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
export const routes: Routes = [


   { path: '', loadComponent : ()=> import('./pages/auth/login/login.component').then(log=> log.LoginComponent)},
   { path: 'layout', component : LayoutComponent}

];

