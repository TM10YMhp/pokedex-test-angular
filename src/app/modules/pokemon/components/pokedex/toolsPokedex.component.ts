import {PokemonService} from "@/app/services";
import {Component} from "@angular/core";

@Component({
  selector: 'app-toolsPokedex',
  host: {
    class: `bg-red-600 pt-2.5 px-1.5 min-w-[2.5rem] text-white font-bold rounded-l-lg
    border-r border-black`
  },
  template: `
    <p
      class="border-b pb-2 mb-2 cursor-pointer text-center text-4xl sm:hidden"
      (click)="onClick()"
    >
      <app-arrowsSvg></app-arrowsSvg>
    </p>
    <a
      class="block hover:text-yellow-400"
      routerLink="/"
    >
      <app-houseSvg></app-houseSvg>
    </a>
  `
})
export class ToolsPokedexComponent {
  constructor(private pokemonService: PokemonService) { }

  onClick() {
    this.pokemonService.switchForm()
  }
}
