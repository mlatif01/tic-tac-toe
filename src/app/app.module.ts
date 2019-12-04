import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { UserService } from './shared/user.service';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './game/board/board.component';
import { CellComponent } from './game/cell/cell.component';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    GameComponent,
    BoardComponent,
    CellComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AmplifyAngularModule,
    HttpClientModule
  ],
  providers: [UserService, AmplifyService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
