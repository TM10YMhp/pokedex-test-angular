import {Component} from "@angular/core";

@Component({
  selector: 'app-pokemon',
  template: `
    <app-pokedex>
      <router-outlet></router-outlet>
    </app-pokedex>
  `
})
export class PokemonComponent {
  constructor() { }
}
