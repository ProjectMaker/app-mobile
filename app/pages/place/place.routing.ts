import { LayoutComponent as PlaceListLayoutComponent} from './components/list/layout.component';
import { LayoutComponent as PlaceShareLayoutComponent } from './components/share/layout.component';
export const routes = [
  { path: 'places', component: PlaceListLayoutComponent },
  { path: 'place-share/:id', component: PlaceShareLayoutComponent }
];

export const navigatableComponents = [
  PlaceListLayoutComponent,
  PlaceShareLayoutComponent
];