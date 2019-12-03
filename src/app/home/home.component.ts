import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Auth from '@aws-amplify/auth';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  gameDetails;

  constructor(private router: Router) { }

  ngOnInit() {
    // Improve this implementation using Auth Guard
    if (localStorage.getItem('CognitoIdentityServiceProvider.193l2qgeu9o51qpmboddhda5kk.58b3c124-378e-4bd9-b628-9456e15b7dba.idToken') == null) {
      this.router.navigateByUrl('/user/login');
    }

  }

  onLogout() {
    Auth.signOut()
      .then(() => console.log("LOGGED OUT"));
    localStorage.removeItem('algoliasearch-client');
    this.router.navigate(['/user/login']);
  }

}
