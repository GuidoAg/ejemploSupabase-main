import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'usuario',
        loadComponent: () => import('./components/usuario/usuario.component').then(m => m.UsuarioComponent),
      },
      {
        path: 'quien-soy',
        loadComponent: () => import('./components/quien-soy/quien-soy.component').then(m => m.QuienSoyComponent),
      },
      {
        path: 'juegos',
        loadComponent: () => import('./components/juegos/juegos.component').then(m => m.JuegosComponent),
      }
    ]
  }
];

