import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from 'src/app/core/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  private url = `${environment.URL_API}/episode`;

  constructor(
    private http: HttpClient
  ) { }

  public getEpisodes(page = 1): Observable<object> {
    return this.http.get(`${this.url}?page=${page}`)
      .pipe(
        map( ({results}: any) => {
          return results;
        })
      );
  }

  public getEpisode(id: number): Observable<Character[]> {
    return this.http.get(`${this.url}/${id}`)
      .pipe(map(({characters}: any) => this.getCharacter(characters)));
  }

  private getCharacter(characters: string[]): Character[] {
    const characterArray: Character[] = [];

    characters.map((characterUrl: string) => {
      this.http.get(characterUrl).subscribe((response: Character) => {
        characterArray.push(response);
      });
    });

    return characterArray;
  }
}
