import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'giphy', component: GiphySearchManualComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class GiphySearchManualRoutingModule {
 }
