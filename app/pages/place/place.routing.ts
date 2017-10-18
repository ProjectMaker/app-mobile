import { LayoutComponent as PlaceListLayoutComponent} from './components/list/layout.component';
import { LayoutComponent as PlaceShareLayoutComponent } from './components/share/layout.component';
import { LayoutComponent as PlaceDetailLayoutComponent } from './components/detail/layout.component';

import { PlaceDetailInfosComponent } from './components/detail/infos/infos.component';
import { PlaceDetailNewsFeedComponent } from './components/detail/news-feed/news-feed.component';
export const routes = [
  { path: 'places', component: PlaceListLayoutComponent },
  { path: 'place-share/:id', component: PlaceShareLayoutComponent },
  { path: 'place/detail', component: PlaceDetailLayoutComponent, children: [
    { path: 'infos', component: PlaceDetailInfosComponent },
    { path: 'news-feed', component: PlaceDetailNewsFeedComponent }
  ]}
];

export const navigatableComponents = [
  PlaceListLayoutComponent,
  PlaceShareLayoutComponent,
  PlaceDetailLayoutComponent,
  PlaceDetailInfosComponent,
  PlaceDetailNewsFeedComponent
];