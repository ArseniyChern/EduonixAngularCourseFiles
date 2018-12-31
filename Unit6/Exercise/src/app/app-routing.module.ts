import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HOME_CHILD_ROUTES } from './home/home-routing';

const routes: Routes = [
  { path: 'home/:username', component: HomeComponent, children: HOME_CHILD_ROUTES },
  { path: '**', component: LoginComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
