import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageSliderComponent } from './home/image-slider/image-slider.component';
import { OurClientsComponent } from './home/our-clients/our-clients.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AboutCompComponent } from './home/about-comp/about-comp.component';
import { ProcessfollowComponent } from './processfollow/processfollow.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageSliderComponent,
    OurClientsComponent,
    AboutCompComponent,
    ProcessfollowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
