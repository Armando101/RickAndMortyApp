import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  private url = `${environment.URL_API}/episode`;

  constructor(
    private http: HttpClient
  ) { }

  getEpisodes(page = ''): Observable<object> {
    return this.http.get(`${this.url}${page}`)
      .pipe(
        map( ({results}: any) => {
          return results;
        })
      );
  }
}
