import { LayoutComponent as FriendsLayoutComponent } from './components/friends/layout.component';
import { LayoutComponent as FriendLayoutComponent } from './components/friend/layout.component';
import { LayoutComponent as FriendAddLayoutComponent } from './components/friend-add/layout.component';

export const routes = [
  { path: 'friends', component: FriendsLayoutComponent },
  { path: 'friend/:id', component: FriendLayoutComponent },
  { path: '', component: FriendAddLayoutComponent }
];

export const navigatableComponents = [
  FriendsLayoutComponent,
  FriendLayoutComponent,
  FriendAddLayoutComponent
];