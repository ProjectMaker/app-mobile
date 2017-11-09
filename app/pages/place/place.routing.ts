import { LayoutComponent as PlaceListLayoutComponent} from './components/list/layout.component';
import { LayoutComponent as PlaceShareLayoutComponent } from './components/share/layout.component';
import { LayoutComponent as PlaceDetailLayoutComponent } from './components/detail/layout.component';

export const routes = [
  { path: 'places', component: PlaceListLayoutComponent },
  { path: 'place-share/:id', component: PlaceShareLayoutComponent },
  { path: 'place/:id/infos', component: PlaceDetailLayoutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'place/1/infos' }
];

export const navigatableComponents = [
  PlaceListLayoutComponent,
  PlaceShareLayoutComponent,
  PlaceDetailLayoutComponent,
];