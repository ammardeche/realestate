import { Component } from '@angular/core';
import { HttpEndpointsService } from '../../services/http-endpoints.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  constructor(private http: HttpEndpointsService) {
    this.http
      .get('http://localhost:3000/api/posts/getPosts')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
