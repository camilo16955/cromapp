import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { SomeComponent } from './some-component/some-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'notfound',
    loadChildren: () => import('./notfound/notfound.module').then(m => m.NotfoundPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule),
    canActivate: [AuthGuard]
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
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'database-test',
    loadChildren: () => import('./pages/database-test/database-test.module').then(m => m.DatabaseTestPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'api-test',
    loadChildren: () => import('./pages/api-test/api-test.module').then(m => m.ApiTestPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'camera-test',
    loadChildren: () => import('./pages/camera-test/camera-test.module').then(m => m.CameraTestPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'some',
    component: SomeComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
