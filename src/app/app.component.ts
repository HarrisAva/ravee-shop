import { Component, inject } from '@angular/core'
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet
} from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component"
import { Title } from '@angular/platform-browser'
import { filter } from 'rxjs'

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent]
})
export class AppComponent {

  // constructor(
  //   private router: Router,
  //   private titleService: Title
  // ) {
  //   // Check if the user is logged in
  // }

  private router = inject(Router)
  private titleService = inject(Title)

  title = 'ravee-art';
}
