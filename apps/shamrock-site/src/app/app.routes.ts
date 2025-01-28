import { Route } from '@angular/router';
import { HomeComponent, FollowComponent, ReadComponent, PlayComponent, WatchComponent, } from '@shamrock/pages';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'follow', component: FollowComponent },
  { path: 'read', component: ReadComponent },
  { path: 'play', component: PlayComponent },
  { path: 'watch', component: WatchComponent },
];
