import {colors, Pokemon} from "@/app/models";
import {PokemonService} from "@/app/services";
import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-screenPokedex',
  template: `
    <div
      class='p-4 bg-gray-500 rounded-b-3xl grid place-items-center'
      [style.backgroundColor]="bgColor"
    >
      <div class='font-bold flex flex-row justify-between w-full'>
        <p
          class='flex flex-row items-center gap-2 sm:invisible
          cursor-pointer hover:drop-shadow-xl leading-[0.9]'
          (click)="onClick()"
        >
          <app-arrowLeft class='w-4'></app-arrowLeft> Search
        </p>
        <p>{{id}}</p>
      </div>
      <div *ngIf='loading' class='w-36 h-36 grid place-items-center'>
        <app-loaderSvg></app-loaderSvg>
      </div>
      <img
        [src]="pokemon.img"
        [alt]="pokemon.name"
        class='w-36'
        [hidden]='loading'
        (load)="onLoad()"
      />
    </div>
  `
})
export class ScreenPokedexComponent implements OnInit {
  @Input() pokemon: Partial<Pokemon> = {}
  form?: boolean

  loading?: boolean

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.loading.subscribe((e:any) => this.loading = e)
    this.pokemonService.form.subscribe((e:any) => this.form = e)
  }

  onClick() {
    this.pokemonService.form = !this.form
  }

  get bgColor() {
    return colors[this.pokemon.types?.[0] ?? '']
  }

  get id() {
    if(!this.pokemon.id) return '#000'
    return '#' + ('000' + this.pokemon.id).slice(-3)
  }

  onLoad() {
    this.pokemonService.loading = false
  }
}
