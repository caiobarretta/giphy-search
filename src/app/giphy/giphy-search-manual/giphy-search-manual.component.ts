import { Component, OnInit } from '@angular/core';
import { GiphySearchService } from '../giphy-search.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'giphy-search-manual',
  templateUrl: 'giphy-search-manual.component.html'
})

export class GiphySearchManualComponent implements OnInit {

  gifs: any[] = [];
  limit: string;
  term: string;

  constructor(private title: Title, private giphySearchService: GiphySearchService) {
   }

  ngOnInit() {
    this.title.setTitle('GiphySearch by Caio');
  }

  pesquisarGiphy() {
    this.giphySearchService.pesquisarGiphy(this.limit, this.term)
      .subscribe(data => {
        this.gifs = data[0];
      });
  }
}
