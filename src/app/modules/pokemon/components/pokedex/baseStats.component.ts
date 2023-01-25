import {Component, Input} from "@angular/core";
import {Pokemon} from "src/app/models";

@Component({
  selector: 'app-baseStats',
  host: {
    class: 'flex flex-col gap-2 w-full'
  },
  template: `
    <p class='text-lg text-center font-bold'>Base Stats</p>
    <app-progressBar
      [field]="'HP'"
      [value]='pokemon.hp'
      [max]=300
    >
    </app-progressBar>
    <app-progressBar
      [field]="'ATK'"
      [value]='pokemon.attack'
      [max]=300
    >
    </app-progressBar>
    <app-progressBar
      [field]="'DEF'"
      [value]='pokemon.defense'
      [max]=300
    >
    </app-progressBar>
    <app-progressBar
      [field]="'SPD'"
      [value]='pokemon.speed'
      [max]=300
    >
    </app-progressBar>
    <app-progressBar
      [field]="'EXP'"
      [value]='pokemon.exp'
      [max]=1000
    >
    </app-progressBar>
  `
})
export class BaseStatsComponent {
  @Input() pokemon: Partial<Pokemon> = {}
  constructor() { }
}
