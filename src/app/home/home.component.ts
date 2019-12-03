import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Auth from '@aws-amplify/auth';
import { Hub } from 'aws-amplify';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  gameDetails;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    this.service.isUserLoggedIn();
  }

  onLogout() {
    Auth.signOut()
      .then(() => console.log('Logged Out'));
    this.router.navigateByUrl('/user/login');
  }

}
