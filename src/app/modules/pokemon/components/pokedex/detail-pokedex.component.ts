import {Pokemon} from "@/app/models";
import {PokemonService} from "@/app/services";
import {Component} from "@angular/core";

@Component({
  selector: 'app-detail-pokedex',
  host: {
    class: 'text-white bg-[#2b292c] flex-1 w-full',
    '[class]': "(form ? 'hidden' : 'block')+' sm:block sm:max-w-[30rem]'"
  },
  template: `
    <app-screenPokedex [pokemon]="pokemon"></app-screenPokedex>

    <div class='p-8 pt-5'>
      <app-baseInfo [pokemon]='pokemon'></app-baseInfo>
      <app-baseStats [pokemon]='pokemon'></app-baseStats>
    </div>
  `
})
export class DetailPokedexComponent {
  pokemon: Partial<Pokemon> = {}
  form?: boolean

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.form.subscribe((e:any) => this.form = e)
    this.pokemonService.pokemons.subscribe((e:any) => this.pokemon = e)
  }
}
