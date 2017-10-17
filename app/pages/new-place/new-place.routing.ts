import { LayoutComponent as NewPlaceLayoutComponent} from './components/new-place/layout.component';
import { LayoutComponent as NewPlaceInfosLayoutComponent} from './components/new-place-infos/layout.component';

export const routes = [
  { path: 'new-place/select', component: NewPlaceLayoutComponent },
  { path: '', component: NewPlaceInfosLayoutComponent },
];

export const navigatableComponents = [
  NewPlaceLayoutComponent,
  NewPlaceInfosLayoutComponent
];