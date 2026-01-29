import { Component } from '@angular/core';
import { input } from '@angular/core';
@Component({
  selector: 'app-item-component',
  imports: [],
  templateUrl: './item-component.html',
  styleUrl: './item-component.css',
})
export class ItemComponent {
  id = input<number>();
  name = input.required<string>();
  salary = input<number>();
}
