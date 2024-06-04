import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'agenda',
        loadChildren: () => import('../agenda/agenda.module').then(m => m.AgendaPageModule)
      },
      {
        path: 'equipos',
        loadChildren: () => import('../equipos/equipos.module').then(m => m.EquiposPageModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('../contacto/contacto.module').then(m => m.ContactoPageModule)
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
