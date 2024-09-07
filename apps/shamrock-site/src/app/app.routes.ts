import { Route } from '@angular/router';
import {
  HomeComponent,
  WatchComponent,
  FollowComponent,
} from '@shamrock/pages';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'follow', component: FollowComponent },
  { path: 'watch', component: WatchComponent },
];
