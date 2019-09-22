import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService, public router: Router) { 
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in': 'out');
  }

  login() {
    this.message = "Trying to log in ...";
    this.authService.login().subscribe( () => {
      this.setMessage();
      if(this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl?
                    this.router.parseUrl(this.authService.redirectUrl):'/books';
      
          // redirect
          this.router.navigateByUrl(redirect);
      }

    });
  }

  logout()  {
    this.authService.logout();
    this.setMessage();
  }

  ngOnInit() {
  }

}
