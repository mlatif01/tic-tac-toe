import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './game/board/board.component';
import { CellComponent } from './game/cell/cell.component';


const routes: Routes = [
  {path: '', redirectTo: '/user/login', pathMatch: 'full'},
  {path: 'user', component: UserComponent,
  children: [
    {path: 'signup', component: SignupComponent}, // user/signup
    {path: 'login', component: LoginComponent}    // user/login
  ]},
  {path: 'home', component: HomeComponent, // home
    children: [
      {path: 'board', component: BoardComponent},
      {path: 'cell', component: CellComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
