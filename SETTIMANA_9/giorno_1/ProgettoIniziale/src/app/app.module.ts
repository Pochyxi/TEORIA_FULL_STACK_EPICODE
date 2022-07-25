import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { LandingComponent } from './landing/landing.component';
import { CallRowComponent } from './call-row/call-row.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { ContenutoComponent } from './contenuto/contenuto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    MainComponentComponent,
    FooterComponentComponent,
    LandingComponent,
    CallRowComponent,
    CallToActionComponent,
    ContenutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
