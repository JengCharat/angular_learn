import { Routes } from '@angular/router';
import { Firstpage } from './page/firstpage/firstpage';
import { Secondpage } from './page/secondpage/secondpage';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'firstpage',
    pathMatch: 'full',
  },
  {
    path: 'firstpage',
    component: Firstpage,
  },
  {
    path: 'secondpage',
    component: Secondpage,
  },
];
