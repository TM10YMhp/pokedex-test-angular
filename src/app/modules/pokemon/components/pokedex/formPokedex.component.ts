import {Component, OnInit} from "@angular/core";
import {PokemonService} from "src/app/services";
import names from 'src/app/models/names.json'

@Component({
  selector: 'app-formPokedex',
  host: {
    class: `bg-red-600 p-2 text-white font-bold w-full`,
    "[class]": "(form ? 'block' : 'hidden') + ' sm:block sm:w-56'",
    //"[style.display]": "hidden ? 'block' : 'none'",
    //"[class.hidden]": "!hidden",
    //"[class.block]": "hidden",
  },
  template: `
    <form (ngSubmit)="onSubmit()">
      <p class='truncate'>{{error ? error : 'select a pokemon'}}</p>
      <input
        placeholder="insert name | number"
        class="rounded w-full px-1.5 bg-black font-normal"
        name="pokemonId"
        (ngModelChange)="completePokemon($event)"
        [(ngModel)]="value"
      />
      <div class='overflow-y-auto h-[32rem]'>
        <p
          *ngFor="let v of suggestions"
          class="cursor-pointer hover:bg-yellow-500 bg-yellow-600 border
          border-yellow-900 px-1.5"
          (click)="onClick(v)"
        >
          {{v}}
        </p>
      </div>
    </form>
  `,
})
export class FormPokedexComponent implements OnInit {
  form?: boolean

  error?: string
  value: string = ''
  suggestions: string[] = []

  constructor(private pokemonService: PokemonService){ }

  ngOnInit(): void {
    this.suggestions = this.pokemonService.suggestions
    this.pokemonService.form.subscribe((e:any) => this.form = e)
    this.pokemonService.status.subscribe((e:any) => this.error = e)
  }

  onClick(v:string) {
    const regex = /([0-9]+)/g
    const id = v.match(regex)?.[0]
    this.searchPokemon(id)
  }

  onSubmit() {
    if(!this.value) return
    this.searchPokemon(this.value)
    this.value = ''
    this.suggestions = this.pokemonService.suggestions
  }

  searchPokemon(id:string = '') {
    if(!id) return
    if(this.pokemonService.isOtherPokemon(id)) return
    this.pokemonService.form = false
    this.pokemonService.loading = true
    this.pokemonService.status = 'loading'
    this.pokemonService.getPokemon(id)
  }

  completePokemon(inputValue:string) {
    const input = inputValue.toLowerCase()
    const getSameLength = (a:string) => a.slice(0, input.length)

    const arr = names.filter((e:any) => {
      return input === getSameLength(e.name) || input === getSameLength(e.id)
    })
    const suggestions = arr.map((e:any) => `${e.id}: ${e.name}`)
    this.suggestions = suggestions.length ? suggestions : ['...']
  }
}
