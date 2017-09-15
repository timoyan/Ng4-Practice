import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { LeftNavComponent } from './Component/left-nav/left-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
