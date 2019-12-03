import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  formModel = this.formBuilder.group({
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(8)]]
  });

  isUserLoggedIn() {
    Auth.currentAuthenticatedUser()
    .then(() => {
      this.router.navigateByUrl('/home');
    })
    .catch(() => {
      this.router.navigateByUrl('/user/login');
    });
  }


}
