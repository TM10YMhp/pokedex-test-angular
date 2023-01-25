import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import {Pokemon} from '../models';
import names from '@/app/models/names.json'
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _loading = new BehaviorSubject(true)
  private _form = new BehaviorSubject(true)
  private _status = new BehaviorSubject('')

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';
  private _suggestions: string[] = names.map((e:any) => `${e.id}: ${e.name}`)

  private _pokemons = new BehaviorSubject([] as any)

  constructor(private http:HttpClient) { }

  get loading() { return this._loading.asObservable() }
  set loading(a:any) { this._loading.next(a) }

  get form() { return this._form.asObservable() }
  set form(a:any) { this._form.next(a) }
  switchForm() { this._form.next(!this._form.getValue())}

  get suggestions() { return this._suggestions }

  get pokemons() { return this._pokemons.asObservable() }
  set pokemons(a:any) { this._pokemons.next(a) }

  get status() { return this._status.asObservable() }
  set status(a:any) { this._status.next(a) }

  fetchPokemon(name: string | number) {
    if(typeof name === 'string') {
      name = name.toLowerCase()
    }
    return this.http.get(`${this.baseUrl}/${name}`)
      .pipe(
        map((data:any): Pokemon => {
          const [hp, attack, defense,,,speed] = data.stats
            .map((e: any) => e.base_stat)

          return {
            name: data.name,
            id: data.id,
            img: data.sprites.front_default,
            exp: data.base_experience,
            types: data.types.map((e:any) => e.type.name),
            weight: data.weight/10,
            height: data.height/10,
            hp,
            attack,
            defense,
            speed
          }
        }),
      )
  }

  getPokemon(name: string | number) {
    this.fetchPokemon(name).subscribe({
      next: (e:any) => this.pokemons = e,
      error: () => this.status = 'not found: '+name,
      complete: () => this.status = 'complete'
    })
  }

  isOtherPokemon(id:string) {
    return id === this._pokemons.getValue().id.toString()
  }
}
