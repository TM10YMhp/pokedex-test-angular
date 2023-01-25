import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  host: {
    class: `opacity-90 bg-gray-900 grid place-items-center py-2 w-full
    text-white text-sm`
  },
  template: `<ng-content></ng-content>`,
})
export class FooterComponent { }
