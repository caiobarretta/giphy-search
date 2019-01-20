import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifSeachManualComponent } from './giphy/giphy-search-manual/giphy-search-manual.component';

@NgModule({
  declarations: [
    AppComponent,
    GifSeachManualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
