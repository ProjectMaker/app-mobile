import { LayoutComponent as NewPlaceLayoutComponent} from './components/new-place/layout.component';
import { LayoutComponent as NewPlaceInfosLayoutComponent} from './components/new-place-infos/layout.component';

export const routes = [
  { path: '', component: NewPlaceLayoutComponent },
  { path: 'new-place/infos', component: NewPlaceInfosLayoutComponent },
];

export const navigatableComponents = [
  NewPlaceLayoutComponent,
  NewPlaceInfosLayoutComponent
];