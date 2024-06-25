import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatabaseTestPage } from './database-test.page';

const routes: Routes = [
  {
    path: '',
    component: DatabaseTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatabaseTestPageRoutingModule {}
