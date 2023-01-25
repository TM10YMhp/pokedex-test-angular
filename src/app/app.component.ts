import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="grid grid-rows-[1fr_auto] place-items-center min-h-screen">
      <main class='w-full h-full bg-gray-700 p-5'>
        <router-outlet></router-outlet>
      </main>

      <footer class="w-full">
        <app-footer>
          <p>Developed by Alejandro Maturrano</p>
          <p>tm10ymhp@protonmail.com</p>
        </app-footer>
      </footer>
    </div>
  `,
  styles: []
})
export class AppComponent {
  constructor() { }
}
