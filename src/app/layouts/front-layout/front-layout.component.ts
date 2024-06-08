import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-front-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './front-layout.component.html',
  styleUrl: './front-layout.component.scss'
})
export class FrontLayoutComponent {

}
