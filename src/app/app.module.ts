import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
  apiKey: 'AIzaSyAsZZyi8JEosyMObOqoBtayO9ChopK727E'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
