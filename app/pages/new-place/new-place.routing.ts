import { LayoutComponent as NewPlaceSelectLayoutComponent} from './components/new-place-select/layout.component';
import { LayoutComponent as NewPlaceInfosLayoutComponent} from './components/new-place-infos/layout.component';

export const routes = [
  { path: 'new-place/select', component: NewPlaceSelectLayoutComponent },
  { path: 'new-place/infos', component: NewPlaceInfosLayoutComponent }
];

export const navigatableComponents = [
  NewPlaceSelectLayoutComponent,
  NewPlaceInfosLayoutComponent,
];