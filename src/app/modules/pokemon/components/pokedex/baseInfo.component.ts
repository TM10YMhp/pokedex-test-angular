import {Component, Input} from "@angular/core";
import {newColors, Pokemon} from "src/app/models";

@Component({
  selector: 'app-baseInfo',
  host: {
    class: 'flex flex-col items-center'
  },
  template: `
    <div>
      <p class='text-2xl text-center font-bold mb-2'>{{pokemon.name}}</p>
      <div class='flex flex-row gap-5 justify-center'>
        <p
          *ngFor='let type of pokemon.types'
          class='bg-yellow-500 w-24 font-bold text-center rounded-xl'
          [style.backgroundColor]="getColor(type)"
        >
          {{type}}
        </p>
      </div>
    </div>
    <div class='m-5 flex flex-row justify-center gap-16 w-full'>
      <div class='text-center'>
        <p class='text-lg font-bold'>{{pokemon.weight}} KG</p>
        <p class='text-sm text-gray-300'>Weight</p>
      </div>
      <div class='text-center'>
        <p class='text-lg font-bold'>{{pokemon.height}} M</p>
        <p class='text-sm text-gray-300'>Height</p>
      </div>
    </div>
  `,
})
export class BaseInfoComponent {
  @Input() pokemon: Partial<Pokemon> = {}

  getColor(type:string) {
    return newColors[type]
  }
}
