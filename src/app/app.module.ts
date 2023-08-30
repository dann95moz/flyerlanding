import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlaceCardComponent } from './components/cards/place-card/place-card.component';
import {  DestinationCardComponent } from './components/cards/destination-card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DestinationCardComponent,
    NavbarComponent,
    SidebarComponent,
    PlaceCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
