import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTabGroupModule } from 'ngx-tab-group';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTabGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
