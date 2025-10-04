import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'home-component',
  template: `<div>Hi from home component</div>`,
  imports: [CommonModule],
})
export class HomeComponent {}
