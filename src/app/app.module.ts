import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphySearchManualModule } from './giphy/giphy-search-manual/giphy-search-manual.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GiphySearchManualModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
