import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigate(['/user/login']);
  }

}
