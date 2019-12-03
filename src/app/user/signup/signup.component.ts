import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  constructor(public service: UserService, private router: Router) { }

  ngOnInit() {
    Auth.currentAuthenticatedUser()
    .then(() => {
      this.router.navigateByUrl('/home');
    })
    .catch(() => {
    });
  }

  onSubmit() {
    Auth.signUp({
      'username': this.service.formModel.value.Email,
      'password':  this.service.formModel.value.Password
    }).then((user: any) => {
      this.service.formModel.reset();
      this.router.navigateByUrl('/user/login');
    });
  }

}
