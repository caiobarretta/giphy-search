import { Giphy } from './giphy-search-manual/giphy.type';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GiphySearchService {

  constructor(private http: HttpClient) {
  }

  pesquisarGiphy(limit: string, term: string): Observable<Giphy> {
    const apiKey = 'mdYTsHMSGbIyGff5ZP4xrKEdXWb1P9V1';
    const url = this.getUrl(apiKey, limit, term);
    return this.http.get<Giphy>(url);
  }

  getUrl(apiKey: string, limit: string, term: string): string {

    return 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=' + apiKey + '&limit=' + limit;
  }
}
