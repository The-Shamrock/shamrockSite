import { Route } from '@angular/router';
import { HomeComponent, FollowComponent, ReadComponent, PlayComponent } from '@shamrock/pages';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'follow', component: FollowComponent },
  { path: 'read', component: ReadComponent },
  { path: 'play', component: PlayComponent },
];
