import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'; // Importa el AuthGuard

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'notfound',
    loadChildren: () => import('./notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'equipos',
    loadChildren: () => import('./equipos/equipos.module').then(m => m.EquiposPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'database-test',
    loadChildren: () => import('./pages/database-test/database-test.module').then(m => m.DatabaseTestPageModule)
  },
  {
    path: 'api-test',
    loadChildren: () => import('./pages/api-test/api-test.module').then(m => m.ApiTestPageModule)
  },
  {
    path: 'camera-test',
    loadChildren: () => import('./pages/camera-test/camera-test.module').then( m => m.CameraTestPageModule)
  },
  { path: '**', redirectTo: 'notfound' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
