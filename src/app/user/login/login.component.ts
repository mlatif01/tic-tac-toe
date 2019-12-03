import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(public service: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.service.formModel.value.Email == "milad@latif.com" && this.service.formModel.value.Password == "miladlatif") {
      this.router.navigateByUrl('/home');
    }
    this.service.formModel.reset();
    console.log("SHOULD RESET");

  }

}
