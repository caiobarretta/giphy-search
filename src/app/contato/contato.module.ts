import { ContatoComponent } from './contato.component';
import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ContatoRoutingModule } from './contato-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ContatoComponentService } from './contato.component.service';

@NgModule({
  declarations: [ ContatoComponent ],
  imports: [
    ShareModule,
    BrowserModule,
    HttpClientModule,
    ContatoRoutingModule
  ],
  providers: [ ContatoComponentService ],
  exports: [ ContatoComponent ],
  bootstrap: [ ContatoComponent ]
})
export class ContatoModule { }
