import { Component } from '@angular/core';
import { HttpEndpointsService } from '../../services/http-endpoints.service';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  constructor(private http: HttpEndpointsService) {
    this.http
      .get('http://localhost:3000/api/posts/getPosts')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
