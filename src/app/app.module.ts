import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // Importar CommonModule

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ApiService } from './services/api.service';

// Importaciones para NgRx Store
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

import { SomeComponent } from './some-component/some-component.component';  // Importar SomeComponent
import { LoginComponent } from './pages/login/login.component'; 

@NgModule({
  declarations: [AppComponent, SomeComponent],  // Declarar SomeComponent
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,  // Añadir CommonModule
    StoreModule.forRoot(reducers),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    AuthGuard,
    ApiService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
