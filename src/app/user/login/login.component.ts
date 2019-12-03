import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Auth from '@aws-amplify/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(public service: UserService, private router: Router) { }

  ngOnInit() {
    // improve implemntation of this with Auth Guard
    if (localStorage.getItem('CognitoIdentityServiceProvider.193l2qgeu9o51qpmboddhda5kk.58b3c124-378e-4bd9-b628-9456e15b7dba.idToken') != null) {
      this.router.navigateByUrl('/home');
    }
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
