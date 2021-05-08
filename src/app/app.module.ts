import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BasicWalkthroughComponent } from './basic-walkthrough/basic-walkthrough.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BasicWalkthroughComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
