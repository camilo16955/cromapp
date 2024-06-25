import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraTestPageRoutingModule } from './camera-test-routing.module';

import { CameraTestPage } from './camera-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraTestPageRoutingModule
  ],
  declarations: [CameraTestPage]
})
export class CameraTestPageModule {}
