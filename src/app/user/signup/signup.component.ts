import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    // do something on registration
  }

}
