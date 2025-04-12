import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { RickMortyResponse } from '../interfaces/rickmorty.interfaces';

interface Character {
  name: string
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  private readonly baseUrl: string = "https://rickandmortyapi.com/api/character"


  constructor(
    private readonly http: HttpClient
  ) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<RickMortyResponse>(this.baseUrl).pipe(
      map((data) => data.results.map((character) => ({
        name: character.name,
        status: character.status
      })))
    )

  }
}
