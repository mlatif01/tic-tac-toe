import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './game/board/board.component';
import { CellComponent } from './game/cell/cell.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
  {path: '', redirectTo: '/user/login', pathMatch: 'full'},
  {path: 'user', component: UserComponent,
  children: [
    {path: 'signup', component: SignupComponent}, // user/signup
    {path: 'login', component: LoginComponent}    // user/login
  ]},
  {path: 'home', component: HomeComponent, // home
  children: [
    {path: 'game', component: GameComponent} // home/game
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
