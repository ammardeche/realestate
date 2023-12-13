import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, LeftSideBarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
