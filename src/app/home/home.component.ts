import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Auth from '@aws-amplify/auth';
import { Hub } from 'aws-amplify';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  gameDetails;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onLogout() {
    Auth.signOut()
      .then(() => console.log("LOGGED OUT"));
    this.router.navigate(['/user/login']);
  }

}
