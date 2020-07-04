import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {SharedModule} from './shared/shared.modules';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    FooterComponent,
    MainComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
