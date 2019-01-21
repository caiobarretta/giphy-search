import { ShareModule } from './../../share/share.module';
import { NgModule } from '@angular/core';
import { GiphySearchListComponent } from './giphy-search-list.component';

@NgModule({
  declarations: [ GiphySearchListComponent ],
  imports: [
    ShareModule
  ],
  exports: [ GiphySearchListComponent ]
})
export class GiphySearchListModule { }
