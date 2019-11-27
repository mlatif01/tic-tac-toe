import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private formBuilder: FormBuilder) { }

  formModel = this.formBuilder.group({
    Email: ['', Validators.required],
    Password: ['', Validators.required, Validators.minLength(8)]
  })
}
