import { Component } from '@angular/core';
import { HttpEndpointsService } from '../../services/http-endpoints.service';
import { IPost, IResponse } from '../../models/dto';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  posts: IPost[] = [];
  constructor(private http: HttpEndpointsService) {
    this.http
      .post<IResponse<IPost>>('http://localhost:3000/api/posts/getPosts', { id_bloc: 1 })
      .subscribe((res) => {
        this.posts = res.data;
      });
  }
}
