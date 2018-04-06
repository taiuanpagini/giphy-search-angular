import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GiphySearchService {

  constructor(private http: Http) {
  }

  pesquisarGiphy(limit: string, term: string): Observable<Response> {
    const url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=ZbeLnEwOvDnpn15XLJo5P54v3IJ9KKKe&limit=' + limit;
    return this.http.get(url);
  }
}
