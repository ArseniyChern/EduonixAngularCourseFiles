import { DetailsComponent } from './details/details.component';
import { ViewComponent } from './view/view.component';
import { Routes } from '@angular/router';

export const USER_CHILD_ROUTES: Routes = [
  { path: 'userDetails', component: DetailsComponent },
  { path: 'userView', component: ViewComponent },
];
