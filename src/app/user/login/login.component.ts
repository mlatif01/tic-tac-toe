import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  loginModel = {
    Email: '',
    Password: ''
  };

  constructor(public service: UserService) { }

  ngOnInit() {
  }

}
