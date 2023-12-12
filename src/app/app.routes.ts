import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { PostComponent } from './pages/post/post.component';
import { TimelineComponent } from './pages/time-line/timeline.component';
import { HeaderComponent } from './layout/header/header.component';
import { LeftSideBarComponent } from './layout/left-side-bar/left-side-bar.component';
export const routes: Routes = [


   { path: 'login', loadComponent : ()=> import('./pages/auth/login/login.component').then(log=> log.LoginComponent)},
   
   { path: '', 
   component : LayoutComponent,
   children :[
      {path: '', component:NotificationComponent},
      {path: 'post', component:PostComponent},
      {path: 'timeline', component:TimelineComponent},
   ]
   }

];

