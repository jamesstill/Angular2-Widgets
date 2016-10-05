import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WidgetListComponent } from './widgets/widget-list.component';
import { WidgetDetailComponent } from './widgets/widget-detail.component';
import { WidgetEditComponent } from './widgets/widget-edit.component';
import { WidgetCreateComponent } from './widgets/widget-create.component';

const routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: HomeComponent },
  { path: 'widgets',  component: WidgetListComponent },
  { path: 'widget/:id', component: WidgetDetailComponent },
  { path: 'widget-edit/:id', component: WidgetEditComponent },
  { path: 'widget-create', component: WidgetCreateComponent }
];

export const AppRouting = RouterModule.forRoot(routes);