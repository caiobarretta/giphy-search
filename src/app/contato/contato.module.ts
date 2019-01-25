import { ContatoComponent } from './contato.component';
import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ContatoRoutingModule } from './contato-routing.module';

@NgModule({
  declarations: [ ContatoComponent ],
  imports: [
    ShareModule, ContatoRoutingModule
  ],
  exports: [ ContatoComponent ]
})
export class ContatoModule { }
