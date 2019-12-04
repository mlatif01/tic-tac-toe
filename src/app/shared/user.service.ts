import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { API } from 'aws-amplify';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CognitoUserSession, CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userToken: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }

  readonly URI = 'https://p8iyqk0j8h.execute-api.us-east-1.amazonaws.com/dev/games';

  formModel = this.formBuilder.group({
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(8)]]
  });

  isUserLoggedIn(): any {
    Auth.currentAuthenticatedUser()
    .then(() => {
      this.router.navigateByUrl('/home');
      return true;
    })
    .catch(() => {
      this.router.navigateByUrl('/user/login');
    });
  }

  getToken() {
    return Auth.currentSession()
    .then(data => console.log(data.getAccessToken().getJwtToken()))
    .catch(err => console.log(err));
  }

  getGames() {
    return this.http.get(this.URI);
}

  async postGame(gameState: string) {
    let apiName = 'tictactoe';
    let path = this.URI;
    let myInit = {
        headers: {
           Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        }, // OPTIONAL
        response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
        queryStringParameters: {
        }
    }
    API.get(apiName, path, myInit).then(response => {
        console.log(path);
    }).catch(error => {
        console.log(error.response)
    });
  }


}
