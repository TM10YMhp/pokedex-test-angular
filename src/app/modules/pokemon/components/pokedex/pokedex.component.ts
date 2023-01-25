import { Component, OnInit } from '@angular/core';
import { PokemonService } from '@/app/services'
import { Pokemon } from '@/app/models'

@Component({
  selector: 'app-pokedex',
  host: {
    class: 'flex justify-center h-[36rem]'
  },
  template: `
    <ng-template #notrue>
      <div class='grid place-items-center'>
        <app-loaderSvg></app-loaderSvg>
      </div>
    </ng-template>

    <ng-template [ngIf]="pokemon.name" [ngIfElse]="notrue">
      <app-toolsPokedex></app-toolsPokedex>

      <app-formPokedex></app-formPokedex>

      <app-detail-pokedex></app-detail-pokedex>
    </ng-template>
  `,
})
export class PokedexComponent implements OnInit {
  pokemon: Partial<Pokemon> = {}

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.pokemons.subscribe((e:any) => this.pokemon = e)
    this.pokemonService.getPokemon(1)
  }
}
