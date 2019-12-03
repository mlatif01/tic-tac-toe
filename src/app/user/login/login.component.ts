import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Auth from '@aws-amplify/auth';
import { Hub } from 'aws-amplify';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(public service: UserService, private router: Router) { }

  ngOnInit() {
    this.service.isUserLoggedIn();
  }

  onSubmit() {
    Auth.signIn(this.service.formModel.value.Email, this.service.formModel.value.Password)
    .then((user: any) => {
      const jwt = user.signInUserSession.idToken.jwtToken;
      console.log(jwt);
      this.service.formModel.reset();
      this.router.navigateByUrl('/home');
    });
  }

}
