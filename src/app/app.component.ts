import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button routerLink="/" md-raised-button color="primary">Home</button>
  <button routerLink="/about" md-raised-button color="accent">About</button>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {

  }
