import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent:() =>import('./pages/home/home.component'),
  },
  {
    path: 'loginSign',
    children: [
      {
        path: 'sign-up',
        loadComponent: () =>import('./pages/loginSign/sign-up/sign-up.component'),
      },
      {
        path: 'log-in',
        loadComponent: () =>import('./pages/loginSign/log-in/log-in.component'),
      },
    ],
  },
];

