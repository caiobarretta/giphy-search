import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContatoComponentService {
  private static url = 'https://beta.mrest.io/demo/messages';
  static PAGE_SIZE = 5;

  constructor(private http: HttpClient) {
   }

   public get(page: number = 1): Observable<Array<any>> {
    return this.http.get<Array<any>>(ContatoComponentService.url +
      `?pagesize=${ContatoComponentService.PAGE_SIZE}&page=${page}`,
      { headers: new HttpHeaders({'key': 'demo'}) });
  }

  public size(): Observable<any> {
    return this.http.get(ContatoComponentService.url + `/_size`, { headers: new HttpHeaders({'key': 'demo'}) });
  }

  public delete(id: string): Observable<any> {
    return this.http
      .delete(`${ContatoComponentService.url}/${id}`, { headers: new HttpHeaders({'key': 'demo'}) });
  }

  public post(data: any): Observable<any> {
    const _data = { message: data.message, from: data.from, $currentDate: {'timestamp': true} };
    return this.http.post(ContatoComponentService.url, _data, { headers: new HttpHeaders({'key': 'demo'}) });
  }
}
