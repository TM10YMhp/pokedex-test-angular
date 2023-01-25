import {Component} from "@angular/core";

@Component({
  selector: 'app-arrowLeft',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 17 17"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m1.042 8.01 6.305-6.693c.459-.459 1.16-.296
        1.359-.094.402.403.342.998-.061 1.402L4.749 7.063l11.315.002a.94.94 0 0
        1 .927.952.937.937 0 0 1-.927.95L4.852 8.98l3.854 4.271a1.036 1.036 0 0
        1 0 1.461c-.4.405-.95.304-1.352-.101L1.042 8.01Z"
      />
    </svg>
  `
})
export class ArrowLeftComponent { }
