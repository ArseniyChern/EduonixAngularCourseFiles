import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes = [
  { path: 'first/:message', component: FirstComponent },
  { path: 'second/:message', component: SecondComponent },
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
