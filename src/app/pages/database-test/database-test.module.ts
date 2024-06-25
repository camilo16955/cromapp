import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatabaseTestPageRoutingModule } from './database-test-routing.module';

import { DatabaseTestPage } from './database-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatabaseTestPageRoutingModule
  ],
  declarations: [DatabaseTestPage]
})
export class DatabaseTestPageModule {}
