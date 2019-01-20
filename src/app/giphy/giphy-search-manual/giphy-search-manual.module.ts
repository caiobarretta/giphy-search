import { NgModule } from '@angular/core';

import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { GiphySearchService } from '../giphy-search.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [GiphySearchManualComponent],
  declarations: [GiphySearchManualComponent],
  providers: [GiphySearchService],
})
export class GiphySearchManualModule {
}
