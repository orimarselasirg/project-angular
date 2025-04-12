import { Component } from '@angular/core';
import { ObservableService } from './services/observable.service';
import { delay, filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'desde mi proyecto angular';
  public characters: string[] = []
  constructor(
    private readonly observableService: ObservableService
  ) { }

  getCharacters() {
    this.observableService.getCharacters().pipe(
      filter((characters) => characters.length > 0),
      map((characters) => characters.map((character) => character.name)),
      delay(3000)
    ).subscribe((characters) => {
      this.characters = characters
    })
  }
}
