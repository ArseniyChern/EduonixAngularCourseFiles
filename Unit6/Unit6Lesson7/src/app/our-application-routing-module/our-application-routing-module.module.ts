import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { UserComponent } from '../user/user.component';
import { USER_CHILD_ROUTES } from '../user/user.routes';

const routes: Routes = [
  { path: 'user/:id', component: UserComponent, children: USER_CHILD_ROUTES },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes
    )
  ]
})
export class OurApplicationRoutingModuleModule { }
