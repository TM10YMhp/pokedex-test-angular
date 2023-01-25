import { Component, Input } from "@angular/core";

const colorBar:{[key:string]: string } = {
  HP: '#d53a46',
  ATK: '#fea727',
  DEF: '#0092e7',
  SPD: '#8eb0c5',
  EXP: '#388b40',
}

@Component({
  selector: 'app-progressBar',
  host: {
    class: 'grid grid-cols-[50px_1fr] text-sm'
  },
  template: `
    <p>{{field}}</p>
    <div class='h-5 bg-white rounded-2xl'>
      <div
        class='transition-all rounded-2xl h-full text-end pt-0.5'
        [style.backgroundColor]="color"
        [style.width]="width"
      >
        <p class='px-2 font-bold text-black'>
          {{value}}/{{max}}
        </p>
      </div>
    </div>
  `,
})
export class ProgressBarComponent {
  @Input() field: string = ''
  @Input() max: number = 0
  @Input() value?: number

  constructor() {}

  get color() {
    return colorBar[this.field]
  }

  get width() {
    if(!this.value) return '0%'
    if(this.value > this.max) return '100%'

    const decimal = this.value/(this.max / 100)
    return (~~(decimal)).toString() + '%'
  }
}
