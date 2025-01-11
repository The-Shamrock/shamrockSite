import { Route } from '@angular/router';
import { HomeComponent } from '@shamrock/pages';
import { FollowComponent } from '@shamrock/pages';
import { ReadComponent } from '@shamrock/pages';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'follow', component: FollowComponent },
  { path: 'read', component: ReadComponent },
];
