import { Component } from '@angular/core';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private authService: AuthService) {  }

  email: string = "";
  pass: string = "";

  login() {
    this.authService.login(this.email, this.pass);
  }
}
