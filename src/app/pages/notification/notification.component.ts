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
  constructor(private http: HttpEndpointsService) {
    this.http
      .get('http://localhost:3000/api/posts/getPosts')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
