import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParkingGaragesComponent } from './parking-garages/parking-garages.component';

@NgModule({
  declarations: [
    AppComponent,
    ParkingGaragesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
