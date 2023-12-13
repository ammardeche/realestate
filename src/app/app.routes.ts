import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { PostComponent } from './pages/post/post.component';
import { TimelineComponent } from './pages/time-line/timeline.component';
import { isLoggedInGuard } from './guards/is-logged-in.guard';
import { isNotLoggedInGuard } from './guards/is-not-logged-in.guard';
import { TicketComponent } from './pages/ticket/ticket.component';
import { CallusComponent } from './pages/call-us/callus.component';
export const routes: Routes = [


   { path: 'login', 
   canActivate: [isNotLoggedInGuard],
   loadComponent : ()=> import('./pages/auth/login/login.component').then(log=> log.LoginComponent)},
   
   { path: '', 
   component : LayoutComponent,
   canActivate: [isLoggedInGuard],
   children :[
      {path: '', loadComponent : ()=> import('./pages/notification/notification.component').then(m=> m.NotificationComponent)},
      {path: 'post', component:PostComponent},
      {path: 'notification', component:NotificationComponent},
      {path: 'timeline', component:TimelineComponent},
      {path: 'ticket', component:TicketComponent},
      {path: 'call-us', component:CallusComponent},
   ]
   }

];

