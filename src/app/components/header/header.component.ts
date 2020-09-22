import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/AuthenticationService/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  hideHeader = false;

  constructor(private authenticationService: AuthenticationService, public router: Router) {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.hideHeader = route.url === '/auth' ? false : true;
      }
    });
  }

  logout() {
    this.authenticationService.logout();
  }

  ngOnInit(): void {
  }

}
