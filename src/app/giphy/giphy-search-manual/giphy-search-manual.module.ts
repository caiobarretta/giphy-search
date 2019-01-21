import { GiphySearchListModule } from './../giphy-search-list/giphy-search-list.module';
import { NgModule } from '@angular/core';
import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { GiphySearchService } from '../giphy-search.service';
import { ShareModule } from 'src/app/share/share.module';

@NgModule({
  imports: [ShareModule, GiphySearchListModule],
  exports: [GiphySearchManualComponent],
  declarations: [GiphySearchManualComponent],
  providers: [GiphySearchService],
})
export class GiphySearchManualModule {
}
