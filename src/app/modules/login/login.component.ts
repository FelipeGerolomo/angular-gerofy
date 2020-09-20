import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/AuthenticationService/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
  
  }

  ngOnInit(): void {
  }

  authentication() {
    this.authenticationService.authentication();
  }

}
