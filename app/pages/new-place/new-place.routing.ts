import { LayoutComponent as NewPlaceSelectLayoutComponent} from './components/new-place-select/layout.component';
import { LayoutComponent as NewPlaceInfosLayoutComponent} from './components/new-place-infos/layout.component';
import { NewPlaceDetailLayoutComponent, NewPlaceDetailNewsFeedLayoutComponent} from './components/new-place-detail/layout.component';

export const routes = [
  { path: 'new-place/select', component: NewPlaceSelectLayoutComponent },
  { path: 'new-place/infos', component: NewPlaceInfosLayoutComponent },
  { path: 'new-place/detail', component: NewPlaceDetailLayoutComponent },
  { path: 'new-place/detail-feed', component: NewPlaceDetailNewsFeedLayoutComponent },
];

export const navigatableComponents = [
  NewPlaceSelectLayoutComponent,
  NewPlaceInfosLayoutComponent,
  NewPlaceDetailLayoutComponent,
  NewPlaceDetailNewsFeedLayoutComponent
];