import { LayoutComponent as FriendsLayoutComponent } from './components/friends/layout.component';
import { LayoutComponent as FriendLayoutComponent } from './components/friend/layout.component';

export const routes = [
  { path: '', component: FriendsLayoutComponent },
  { path: 'friend/:id', component: FriendLayoutComponent }
];

export const navigatableComponents = [
  FriendsLayoutComponent,
  FriendLayoutComponent
];