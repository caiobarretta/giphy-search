import { ContatoComponent } from './contato.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'contato', component: ContatoComponent}
    ])
  ]
})
export class ContatoRoutingModule { }
