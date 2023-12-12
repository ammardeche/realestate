import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : []
})
export class AppComponent {
  title = 'my-first-project';

}
