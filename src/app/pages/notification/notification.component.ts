import { Component } from '@angular/core';
import { HttpEndpointsService } from '../../services/http-endpoints.service';
import { INotification } from '../../models/dto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  /**
   *
   */
  constructor(
    private http: HttpEndpointsService,
    //private http: HttpClient
  ) {
    http.get<INotification>('').subscribe(res => {
      
    });
  }
}
