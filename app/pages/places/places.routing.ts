import { LayoutComponent as PlacesLayoutComponent} from './components/places/layout.component';
import { LayoutComponent as PlaceShareLayoutComponent } from './components/place-share/layout.component';
export const routes = [
  { path: 'places', component: PlacesLayoutComponent },
  { path: '', component: PlaceShareLayoutComponent }
];

export const navigatableComponents = [
  PlacesLayoutComponent,
  PlaceShareLayoutComponent
];