import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonService } from './common.service';
import { Proxy } from './Proxy';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    CommonService,
    Proxy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
