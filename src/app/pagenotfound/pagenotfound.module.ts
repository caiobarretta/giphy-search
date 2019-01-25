import { routing } from './pagenotfound-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pagenotfound.component';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    routing
  ],
  exports: [ PageNotFoundComponent ]
})
export class PageNotFoundModule { }
