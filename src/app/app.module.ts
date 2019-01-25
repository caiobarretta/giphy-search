import { PageNotFoundModule } from './pagenotfound/pagenotfound.module';
import { ContatoModule } from './contato/contato.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphySearchManualModule } from './giphy/giphy-search-manual/giphy-search-manual.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { InicioModule } from './inicio/inicio.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    InicioModule,
    AppRoutingModule,
    GiphySearchManualModule,
    HttpClientModule,
    CommonModule,
    ContatoModule,

    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
