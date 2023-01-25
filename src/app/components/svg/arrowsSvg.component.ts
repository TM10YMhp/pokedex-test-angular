import {Component} from "@angular/core";

@Component({
  selector: 'app-arrowsSvg',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M15.293 10.293a1 1 0 0 0 1.414 1.414l4-4A.995.995 0 0 0 21
        6.966a.996.996 0 0 0-.304-.685l-3.988-3.988a1 1 0 1 0-1.414
        1.414L17.586 6H4a1 1 0 1 0 0 2h13.586l-2.293 2.293ZM20
        16H6.414l2.293-2.293a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1
        1 0 0 0 1.414-1.414L6.414 18H20a1 1 0 1 0 0-2Z"
      />
    </svg>
  `
})
export class ArrowsSvgComponent { }
