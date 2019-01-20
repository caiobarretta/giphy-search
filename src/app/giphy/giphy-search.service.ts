import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GiphySearchService {

  constructor(private http: HttpClient) {
  }

  pesquisarGiphy(limit: string, term: string): Observable<Object> {
    const apiKey = 'mdYTsHMSGbIyGff5ZP4xrKEdXWb1P9V1';
    const url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=' + apiKey + '&limit=' + limit;
    return this.http.get(url);
  }
}
